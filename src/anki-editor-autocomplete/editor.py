
from aqt import gui_hooks


def setup(js, note, editor):
    global prevAutocomplete
    prevAutocomplete = ""

    my_js = """
        document.styleSheets[1].addRule('.autocomplete', 'margin: 0.3em 0 1.0em 0; color: blue; text-decoration: underline; cursor: pointer;');

        // every second send the current state over
        setInterval(function () {
            const currentField = getCurrentField()
            if (currentField) {
                console.log(currentField.editable.innerHTML)
                var r = {
                   text: currentField.editable.innerHTML
                };
                pycmd("autocomplete:" + JSON.stringify(r));
            }
        }, 1000);
    """
    return js + my_js


def init_editor():
    gui_hooks.editor_will_load_note.append(setup)
