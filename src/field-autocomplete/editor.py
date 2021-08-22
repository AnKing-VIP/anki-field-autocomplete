import json

from aqt import editor, gui_hooks

from .config import config


def setup_ac(editor):
    note_type = editor.note.note_type()

    enabled_ids = config.synced['active_note_type_field_ids']
    enabled_field_ords = []
    for fld in note_type['flds']:
        id = f'{note_type["id"]} {fld["name"]}' 
        if id in enabled_ids:
            enabled_field_ords += [fld['ord']]

    data = {
        "ords" : enabled_field_ords,
        "looseSearch" : config.synced['loose_search']
    }
    editor.web.eval(f'Autocomplete.setup({json.dumps(data)})')


def add_ac_toggle_shortcut(shortcuts, editor: editor.Editor):
    shortcuts.append((
        config['profile']['hotkeys']['toggle'],
        lambda: editor.web.eval(f'Autocomplete.toggleAc({editor.currentField})')
    ))


def init_editor():
    gui_hooks.editor_did_load_note.append(setup_ac)
    gui_hooks.editor_did_init_shortcuts.append(add_ac_toggle_shortcut)
