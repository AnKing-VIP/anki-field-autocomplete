var Autocomplete = {
    acInstances : [],
    optionsByField : [],

    update: (data) => {
        var { ord, options } = data
        Autocomplete.optionsByField[ord] = options
        // Autocomplete.acInstances[ord].start()
    }, 

    setup: () => {
        for(x of Autocomplete.acInstances){
            x.unInit()
            delete x
        }
        Autocomplete.acInstances = []
        Autocomplete.optionsByField = []

        forEditorField([], (field) => {
            var editable = field.editingArea.editable
            var ord = field.editingArea.ord

            style = document.createElement("style")
            style.innerHTML = css
            field.editingArea.shadowRoot.insertBefore(style, editable)

            var ac = new autoComplete({ 
                selector: () => { return editable },
                data: {
                    src: () => { return Autocomplete.optionsByField[ord] },
                    filter: (options) => {
                        var result = options.filter( x => x.value.replace(' ', '') != '' )
                        return result
                    },
                },
                resultItem: {
                    highlight: {
                        render: true
                    }
                },
                wrapper: false,
                events: {
                    input: {
                        init: (event) => {
                            globalThis.bridgeCommand(`autocomplete:{ "ord": ${ord} }`)
                        },
                        focus: (event) => {
                            ac.start();
                        },
                        selection: (event) => {
                            const selection = event.detail.selection.value;
                            editable.fieldHTML = selection;
                        },
                    },
                },
                threshold: 0,
                resultsList: {
                    tag: "ul",
                    class: "autoComplete_results",
                    tabSelect: true,
                    noResults: true,
                    element: (list, data) => {
                        if (!data.results.length) {
                            const message = document.createElement("div");
                            message.setAttribute("class", "no_result");
                            message.innerHTML = `<span>no results</span>`;
                            list.appendChild(message);
                        }
                    },
                    // position: "afterend",
                    // maxResults: 5,
                },
                query: (input) => {
                    return input.replace("<br>", "");
                },
            })

            Autocomplete.acInstances.push(ac)
            Autocomplete.optionsByField.push([])
        })
    },
}


css = `
.no_result {
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

.autoComplete_results {
    max-height: 226px;
    overflow-y: scroll;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    margin: .5rem 0 0 0;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid rgba(33, 33, 33, .1);
    z-index: 1000;
    outline: 0
}

.autoComplete_results>li {
    padding: 10px 20px;
    list-style: none;
    text-align: left;
    font-size: 16px;
    color: #212121;
    transition: all .1s ease-in-out;
    border-radius: 3px;
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .2s ease
}

.autoComplete_results>li::selection {
    color: rgba(#fff, 0);
    background-color: rgba(#fff, 0)
}

.autoComplete_results>li:hover {
    cursor: pointer;
    background-color: rgba(123, 123, 123, .1)
}

.autoComplete_results>li mark {
    background-color: transparent;
    color: #ff7a7a;
    font-weight: 700
}

.autoComplete_results>li mark::selection {
    color: rgba(#fff, 0);
    background-color: rgba(#fff, 0)
}

.autoComplete_results>li[aria-selected=true] {
    background-color: rgba(123, 123, 123, .1)
}
`