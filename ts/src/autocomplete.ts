import autoComplete from "@tarekraafat/autocomplete.js";

import type { EditorFieldAPI } from "@anki/editor/EditorField.svelte";

export class Autocomplete {
    fields: EditorFieldAPI[]
    acByField = new Map();
    optionsByField = new Map();
    enabledFields: number[] = [];
    icons: HTMLElement[] = [];
    looseSearch = false;

    constructor(fields: EditorFieldAPI[]) {
        this.fields = fields;
        Object.assign(globalThis, {
            fieldAutocomplete: this,
        });
    }

    setup(options) {
        this.enabledFields = options["ords"];
        this.looseSearch = options['looseSearch']

        setTimeout(() => {
            this._setupAcs(this.enabledFields)
            this._setupIcons(this.enabledFields);
        })
    }

    update(data) {
        const { ord, options } = data;
        this.optionsByField.set(ord, options);
        const ac = this.acByField.get(ord);
        if (!ac.list.hasAttribute("hidden")) {
            ac.start();
        }
    }

    toggleAc(ord: number, fieldElm: HTMLElement, fieldApi: EditorFieldAPI) {
        if (this.enabledFields.includes(ord)) {
            this.enabledFields.splice(this.enabledFields.indexOf(ord), 1);
            this.icons[ord].classList.remove("enabled");
            this._removeAc(ord);
            globalThis.bridgeCommand(
                `update_ac_settings:{"ord" : ${ord}, "val" : false}`,
            );
        } else {
            this.enabledFields.push(ord);
            this.icons[ord].classList.add("enabled");
            this._addAc(ord, fieldElm, fieldApi);
            globalThis.bridgeCommand(
                `update_ac_settings:{"ord" : ${ord}, "val" : true}`,
            );
        }
    }


    _setupAcs(enabledFields: number[]) {
        if (this.acByField != null) {
            for (const ord of this.acByField.keys()) {
                this._removeAc(ord);
            }
        }

        this.acByField = new Map();
        this.optionsByField = new Map();

        for (const [ord, field] of this.fields.entries()) {
            if (!enabledFields.includes(ord)) return;
            field.element.then((fieldElement: HTMLElement) => {
                this._addAc(ord, fieldElement, field)
            })
        }
    }

    _addAc(ord: number, fieldElm: HTMLElement, fieldApi: EditorFieldAPI) {
        const editingArea = fieldElm.getElementsByClassName("editing-area")[0];
        const shadowRoot = editingArea.getElementsByClassName("rich-text-editable")[0].shadowRoot;
        const editable = shadowRoot?.querySelector("anki-editable");

        let resultListWrapper = editingArea.querySelector('result-list-wrapper')
        if (!resultListWrapper) {
            resultListWrapper = globalThis.document.createElement('span')
            resultListWrapper.id = 'result-list-wrapper'
            editingArea.appendChild(resultListWrapper)

            const style = document.createElement("style")
            style.innerHTML = css
            editingArea.insertBefore(style, resultListWrapper)
        }

        const ac = new autoComplete({
            selector: () => { return editable },
            data: {
                src: () => {
                    return new Promise((resolve, _) => {
                        resolve(this.optionsByField.get(ord) || []);
                    });
                },
                filter: (options) => {
                    const result = options.filter(x => x.value.replace(' ', '') != '')
                    return result
                },
            },
            wrapper: false,
            resultsList: {
                destination: () => {
                    return resultListWrapper
                },
                tag: "ul",
                class: "result-list",
                tabSelect: true,
                noResults: true,
                element: (list, data) => {
                    if (!data.results.length) {
                        const message = document.createElement("div");
                        message.setAttribute("class", "no-result");
                        message.innerHTML = `<span>no results</span>`;
                        list.appendChild(message);
                    }
                },
                maxResults: 10,
            },
            searchEngine: this.looseSearch ? "loose" : "strict",
            resultItem: {
                highlight: {
                    render: true
                }
            },
            events: {
                input: {
                    init: (_) => {
                        globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${ord}, "text" : "" }`)
                    },
                    focus: (_) => {
                        ac.start();
                    },
                    selection: (event: Event) => {
                        const selection = event.detail.selection.value;
                        setTimeout(() => {
                            fieldApi.editingArea.content.set(selection);
                            fieldApi.editingArea.refocus();
                            setTimeout(() => ac.close());
                        });
                    },
                },
            },
            threshold: 0,
            query: (input) => {
                return input.replace("<br>", "").replace('&nbsp;', ' ');
            },
        })

        ac.input.addEventListener('input', () => {
            if (ac.disabled) return
            globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${ord}, "text" : ${JSON.stringify(editable.textContent)} }`)
        })

        this.acByField.set(ord, ac)
        this.optionsByField.set(ord, [])
    }

    _removeAc(ord: number) {
        const ac = this.acByField.get(ord);
        ac.unInit();
        ac.list.remove();
        ac.disabled = true;

        this.acByField.delete(ord);
        this.optionsByField.delete(ord);
    }

    _setupIcons(enabledFields: number[]) {
        for (const icon of this.icons) {
            icon.remove();
        }
        this.icons = [];

        for (const [ord, field] of this.fields.entries()) {
            field.element.then((fieldElement) => {
                const icon = this._addIconToField(ord, fieldElement, field)
                this.icons.push(icon)

                if (enabledFields.includes(ord)) {
                    icon.classList.add('enabled')
                } else {
                    icon.classList.add('disabled')
                }
            });

        }
    }

    _addIconToField(ord: number, fieldElm: HTMLElement, fieldApi: EditorFieldAPI): HTMLElement {
        const icon = globalThis.document.createElement('span')
        icon.classList.add('ac-icon')
        icon.addEventListener('click', () => {
            this.toggleAc(ord, fieldElm, fieldApi)
        })
        let fieldState;
        if(fieldElm.getElementsByClassName("field-state").length) {
            fieldState = fieldElm.getElementsByClassName("field-state")[0]
        } else {
            // 2.1.55+
            fieldState = fieldElm.parentElement?.previousElementSibling?.getElementsByClassName("field-state")[0]
        }
        fieldState.insertBefore(
            icon,
            fieldState.querySelector("span")
        );

        return icon;
    }
}


const css = `
.no-result {
    padding: 10px 20px;
    list-style: none;
    text-align: left;
    font-size: 13px;
    font-style: italic;
    color: #747474;
    transition: all .1s ease-in-out;
    border-radius: 3px;
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .2s ease
}

#result-list-wrapper {
    position: relative;
    display: block;
}

.result-list {
    position: absolute;
    max-height: 226px;
    overflow-y: scroll;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    margin: .15rem 0 0 0;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid rgba(33, 33, 33, .1);
    z-index: 1000;
    outline: 0
}

.result-list>li {
    padding: 10px 20px;
    list-style: none;
    text-align: left;
    font-size: 13px;
    color: #212121;
    transition: all .1s ease-in-out;
    border-radius: 3px;
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .2s ease
}

.result-list>li::selection {
    color: rgba(#fff, 0);
    background-color: rgba(#fff, 0)
}

.result-list>li:hover {
    cursor: pointer;
    background-color: rgba(49, 49, 49, 0.2)
}

.result-list>li mark {
    background-color: transparent;
    color: #ff7a7a;
    font-weight: 700
}

.result-list>li mark::selection {
    color: rgba(#fff, 0);
    background-color: rgba(#fff, 0)
}

.result-list>li[aria-selected=true] {
    background-color: rgba(123, 123, 123, .4)
}

`;