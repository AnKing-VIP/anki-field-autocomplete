import { Autocomplete } from "./autocomplete";

import * as NoteEditor from "anki/NoteEditor";
import "./styles/icon.scss";

import type NoteEditorAPI from "@anki/editor/NoteEditor.svelte";

NoteEditor.lifecycle.onMount(({ fields }: NoteEditorAPI): void => {
    new Autocomplete(fields);
});
