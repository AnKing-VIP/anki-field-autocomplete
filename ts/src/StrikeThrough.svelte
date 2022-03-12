<script lang="ts">
    import * as NoteEditor from "anki/NoteEditor";

    const {
        IconButton,
        WithState,
        //@ts-ignore
    } = components;

    const { focusedInput, fields } = NoteEditor.context.get();
    const key = "strikeThrough";

    $: disabled = $focusedInput?.name !== "rich-text";
</script>

<WithState
    {key}
    update={() => document.queryCommandState(key)}
    let:state={active}
    let:updateState
>
    <IconButton
        {disabled}
        {active}
        tooltip="Strike-through text"
        on:click={(event) => {
            document.execCommand(key);
            updateState(event);

            // globalThis.console.log(get(fields[0].editingArea.content));

            // fields[1].editingArea.content.subscribe((content) => {
            //     globalThis.console.log(content);
            // });
        }}
    >
    <button>strike</button>
    </IconButton>
</WithState>
