
from aqt import gui_hooks


def setup(js, note, editor):
    global prevAutocomplete
    prevAutocomplete = ""

    editor.web.eval("Autocomplete.load()")
    return js


def init_editor():
    gui_hooks.editor_will_load_note.append(setup)
