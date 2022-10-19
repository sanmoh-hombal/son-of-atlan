<script setup lang="ts">
import { inject, ref } from "vue";

import { CONSTANTS } from "@lib";
import { useTablesStore } from "@store";

export interface IFilterSortSelect {
  disabled?: boolean;
  modelValue?: string[];
  options: string[];
}

const props = defineProps<IFilterSortSelect>();
const emits = defineEmits(["update:modelValue"]);

const tablesStore = useTablesStore();

const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);
const baseOptions = ref<Record<string, any>[]>(CONSTANTS.BASE_FILER_OPTIONS);

const onSelect = (value: string[]) => emits("update:modelValue", value);
</script>

<template>
  <a-cascader
    allow-clear
    :disabled="props.disabled"
    :loading="resultsLoading || tablesStore.loading"
    mode="multiple"
    :options="baseOptions.map((option: Record<string, any>) => ({
      ...option, children: props.options.map((option: string) => ({ value: option, label: option }))
    }))"
    placeholder="Add a Filter"
    :value="props.modelValue"
    @change="onSelect" />
</template>
