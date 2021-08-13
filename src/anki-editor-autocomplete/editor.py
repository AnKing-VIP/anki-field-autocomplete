
from aqt import gui_hooks


def setupAc(editor):
    editor.web.eval('Autocomplete.setup()')


def init_editor():
    gui_hooks.editor_did_load_note.append(setupAc)
