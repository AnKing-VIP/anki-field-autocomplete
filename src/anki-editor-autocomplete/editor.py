from aqt import gui_hooks

from .config import get


def setup_ac(editor):
    note_type = editor.note.note_type()

    enabled_field_ords = []
    for fld in note_type['flds']:
        id = f'{note_type["id"]} {fld["name"]}'
        enabled = get(id)
        if enabled:
            enabled_field_ords += [fld['ord']]

    editor.web.eval(f'Autocomplete.setup({enabled_field_ords})')


def init_editor():
    gui_hooks.editor_did_load_note.append(setup_ac)
