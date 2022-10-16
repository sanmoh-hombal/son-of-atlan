<script setup lang="ts">
export interface IEditorInputProps {
  modelValue: String;
}

const props = defineProps<IEditorInputProps>();
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => emit("update:modelValue", (event.target as HTMLInputElement).value);
</script>

<template>
  <a-input :value="props.modelValue" :bordered="false" placeholder="Enter SQL Here" @input="updateValue" />
</template>
