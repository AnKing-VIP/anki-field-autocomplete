
from aqt import gui_hooks


def setup(js, note, editor):
    global prevAutocomplete
    prevAutocomplete = ""

    editor.web.eval("Autocomplete.load()")
    return js

def setup2(editor):
    editor.web.eval('Autocomplete.setupAuto()')


def init_editor():
    gui_hooks.editor_will_load_note.append(setup)
    gui_hooks.editor_did_load_note.append(setup2)
