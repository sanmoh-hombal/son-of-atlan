<script setup lang="ts">
import { highlight, languages } from "prismjs";
import { PrismEditor } from "vue-prism-editor";

import "prismjs/components/prism-sql";
import "prismjs/themes/prism-coy.min.css";
import "vue-prism-editor/dist/prismeditor.min.css";

export interface IEditorInputProps {
  modelValue: string;
}

const props = defineProps<IEditorInputProps>();
const emits = defineEmits(["update:modelValue"]);

const onUpdate = (code: string) => emits("update:modelValue", code);
const highlighter = (code: string) => highlight(code, languages.sql, "sql");
</script>

<template>
  <prism-editor
    :model-value="props.modelValue"
    :highlight="highlighter"
    @update:model-value="onUpdate"
    class="my-editor" />
</template>

<style>
.my-editor {
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
