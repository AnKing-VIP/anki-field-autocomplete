import json
import re

from aqt import gui_hooks
from aqt.editor import Editor

RE_SUB_INVALID = re.compile(r"[^a-zA-Z0-9 \n\s]").sub

noAutocompleteFields = []
prevAutocomplete = ""


def handle_bridge_command(handled, cmd, context):
    if not isinstance(context, Editor):
        return handled

    if not cmd.startswith("autocomplete"):
        return handled

    global prevAutocomplete

    editor: Editor = context

    (type, jsonText) = cmd.split(":", 1)
    result = json.loads(jsonText)
    text = editor.mungeHTML(result["text"])

    # Work-around: delete all symbols from the search
    text = RE_SUB_INVALID("", text)

    if editor.currentField is None:
        return handled

    # bail out if the user hasn't actually changed the field
    previous = "%d:%s" % (editor.currentField, text)
    if prevAutocomplete == previous:
        return handled
    prevAutocomplete = previous

    if text == "" or len(text) > 500 or editor.note is None:
        editor.web.eval("$('.autocomplete').remove();")
        return handled

    field = editor.note.note_type()["flds"][editor.currentField]

    if field["name"] in noAutocompleteFields:
        field["no_autocomplete"] = True

    if "no_autocomplete" in list(field.keys()) and field["no_autocomplete"]:
        return handled

    # find a value from the same model and field whose
    # prefix is what the user typed so far
    model_name = editor.note.note_type()["name"]
    field_name = field["name"]
    query = f'note:"{model_name}" "{field_name}:{text}*"'
    # query = "'note:%s' '%s:%s*'" % (
    # editor.note.model()['name'],
    # field['name'],
    # text)

    col = editor.note.col
    res = col.find_cards(query, order=True)

    if len(res) == 0:
        editor.web.eval("$('.autocomplete').remove();")
        return handled

    # pull out the full value
    value = col.getCard(res[0]).note().fields[editor.currentField]

    escaped = json.dumps(value)

    print(res)
    print(value)
    print(escaped)
    print()

    editor.web.eval(
        """
        $('.autocomplete').remove();

        (function(){
            let currentField = getCurrentField()
            if (currentField) {
            $('<div class="autocomplete">' + %s + '</div>').click({field: currentField}, updateField).insertAfter(currentField)}

            function updateField(event){
                currentField = event.data.field;
                console.log(currentField)
                console.log(currentField.editable)
                currentField.editable.fieldHTML = %s;

                console.log(currentField.ord)
                focusField(currentField.ord);
                currentField.editable.caretToEnd();
            }
        })()
    """
        % (escaped, escaped)
    )

    return handled


def load_autocomplete_js(webcontent, context):
    if isinstance(context, Editor):
        addon_package = context.mw.addonManager.addonFromModule(__name__)
        base_path = f"/_addons/{addon_package}/web"

        webcontent.js.append(f"{base_path}/autcomplete.js")
        webcontent.css.append(f"{base_path}/autcomplete.css")


def init_webview():
    gui_hooks.webview_will_set_content.append(load_autocomplete_js)
    gui_hooks.webview_did_receive_js_message.append(handle_bridge_command)

    # FieldDialog.loadField = wrap(FieldDialog.loadField, myLoadField, 'after')
    # FieldDialog.saveField = wrap(FieldDialog.saveField, mySaveField, 'after')
