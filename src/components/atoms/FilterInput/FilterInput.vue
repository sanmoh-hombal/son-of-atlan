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
const tablesStore = useTablesStore();

const baseOptions = ref<Record<string, any>[]>([
  { value: CONSTANTS.FILTER_EQUALS, label: CONSTANTS.FILTER_EQUALS },
  { value: CONSTANTS.FILTER_NOT_EQUALS, label: CONSTANTS.FILTER_NOT_EQUALS },
  { value: CONSTANTS.FILTER_GREATER_THAN, label: CONSTANTS.FILTER_GREATER_THAN },
  { value: CONSTANTS.FILTER_GREATER_THAN_OR_EQUALS, label: CONSTANTS.FILTER_GREATER_THAN_OR_EQUALS },
  { value: CONSTANTS.FILTER_LESS_THAN, label: CONSTANTS.FILTER_LESS_THAN },
  { value: CONSTANTS.FILTER_LESS_THAN_OR_EQUALS, label: CONSTANTS.FILTER_LESS_THAN_OR_EQUALS },
]);

const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);

const emit = defineEmits(["update:modelValue"]);
const onSelect = (value: string[]) => emit("update:modelValue", value);
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
