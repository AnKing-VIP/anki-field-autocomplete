var Autocomplete = {
    update: (text) => {
        $('.autocomplete').remove();

        let currentField = getCurrentField()
        if (currentField) {
            $('<div class="autocomplete">' + text + '</div>').click(
                {field: currentField}, 
                updateField
            ).insertAfter(currentField)
        }

        function updateField(event){
            currentField = event.data.field;
            currentField.editable.fieldHTML = text;
            focusField(currentField.ord);
            currentField.editable.caretToEnd();
        }
    },

    load: () => {
        // every second send the current state over
        setInterval(function () {
            const currentField = getCurrentField()
            if (currentField) {
                var r = {
                   text: currentField.editable.innerHTML
                };
                pycmd("autocomplete:" + JSON.stringify(r));
            }
        }, 1000);
    }
}