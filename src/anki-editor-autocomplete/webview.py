import json
import re
from pathlib import Path

from aqt import gui_hooks, mw
import aqt
from aqt.editor import Editor


noAutocompleteFields = []
prevAutocomplete = ""

mw.addonManager.setWebExports(__name__, r"(web|icons)/.*\.(js|css|png)")


def handle_bridge_command(handled, cmd, context):
    if not isinstance(context, Editor):
        return handled

    if not cmd.startswith("autocomplete"):
        return handled

    global prevAutocomplete

    editor: Editor = context

    (_, jsonText) = cmd.split(":", 1)
    data = json.loads(jsonText)
    ord = data["ord"]

    field = editor.note.note_type()["flds"][ord]

    if field["name"] in noAutocompleteFields:
        field["no_autocomplete"] = True

    if "no_autocomplete" in list(field.keys()) and field["no_autocomplete"]:
        return handled

    model_name = editor.note.note_type()["name"]
    query = f'note:"{model_name}"'
    col = editor.note.col
    nids = col.find_notes(query)

    options = [
        col.get_note(nid).fields[ord]
        for nid in nids
    ]

    data = {
        "options": options,
        "ord": ord,
    }

    editor.web.eval(f"Autocomplete.update({json.dumps(data)})")

    return handled


def load_autocomplete_js(webcontent: aqt.webview.WebContent, context):
    if isinstance(context, Editor):
        addon_package = context.mw.addonManager.addonFromModule(__name__)
        base_path = Path(f"/_addons/{addon_package}/web")

        webcontent.head += f'<script type="module" src="{str(base_path / "autocomplete/autoComplete.js")}"></script>'

        addons_folder = Path(context.mw.addonManager.addonsFolder())
        addons_dir = (addons_folder / addon_package / "web")
        for file in addons_dir.glob('*.js'):
            file = file.relative_to(addons_dir)
            file = base_path / file
            webcontent.js.append(str(file))

        for file in addons_dir.glob('*.css'):
            file = file.relative_to(addons_dir)
            file = base_path / file
            webcontent.css.append(str(file))


def init_webview():
    gui_hooks.webview_will_set_content.append(load_autocomplete_js)
    gui_hooks.webview_did_receive_js_message.append(handle_bridge_command)