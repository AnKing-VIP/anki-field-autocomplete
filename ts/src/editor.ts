import "./styles/fields-grid.scss";

import StrikeThrough from "./StrikeThrough.svelte";
import Paragraph from "./Paragraph.svelte";
import HorizontalRuler from "./HorizontalRuler.svelte";
import CodeBlock from "./CodeBlock.svelte";

/**
 * This is how you can import from Anki:
 */
import * as NoteEditor from "anki/NoteEditor";

/**
 * The import above looks like a normal static ESM import, however it is not.
 * This is the magic of esbuild. During compilation, the expression above will be translated into:

 * ```ts
 * const NoteEditor = require("anki/NoteEditor");
 * ```
 *
 * This means that you also dynamically import packages exported from Anki:
 * TODO
 */

/**
 * You can use imports prefixed with `@anki' to import types directly
 * from the Anki source. This can be helpful for typing callbacks (see below).
 *
 * Disclaimers:
 * 1. Do no try to import anything but types in this manner! It will not work.
 * 2. Types have less guarantee to stay unchanged a/o be moved to other files.
 *    This will not break you build however, as esbuild does depend on Typescript
 *    types for a build to succeed.
 */
// import type { NoteEditorAPI } from "@anki/editor/NoteEditor.svelte";
import type NoteEditorAPI from "@anki/editor/NoteEditor.svelte";
import type { EditorToolbarAPI } from "@anki/editor/editor-toolbar";

NoteEditor.lifecycle.onMount(({ toolbar, fields }: NoteEditorAPI): void => {

    toolbar.inlineButtons.append({ component: StrikeThrough }, 2);
    toolbar.blockButtons.append({ component: Paragraph });
    toolbar.blockButtons.append({ component: HorizontalRuler });
    toolbar.blockButtons.append({ component: CodeBlock });


    // const fieldContents = ["", ""];
    // setTimeout(() => {
    //     // fields[1].editingArea.content.subscribe((content) => {
    //     //     globalThis.console.log(content);
    //     // });
    //     // for(const [i, field] of fields.entries()){
    //     //     field.editingArea.content.subscribe(content => {
    //     //         fieldContents[i] = content;
    //     //         globalThis.console.log(fieldContents);
    //     //     });
    //     // }
    //     fields[0].element.then((element) => {
    //         globalThis.console.log(element);
    //     });

    // }, 0)

});
