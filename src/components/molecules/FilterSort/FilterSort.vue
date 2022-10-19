<script setup lang="ts">
import { inject } from "vue";

import { CONSTANTS, TYPES } from "@lib";

export interface IFilterSortProps {
  modelValue: TYPES.IFilterSortModelValue;
}

const props = defineProps<IFilterSortProps>();
const emits = defineEmits(["update:modelValue"]);

const resultsData = inject<Record<string, any>[]>(CONSTANTS.RESULTS_DATA_PROVISION_KEY);

const onChange = (column?: string, filters?: string[], sort?: string) =>
  emits("update:modelValue", { column, filters, sort });
</script>

<template>
  <a-space>
    <filter-sort-select
      :model-value="props.modelValue.column"
      :options="resultsData && resultsData[0] ? Object.keys(resultsData[0]) : []"
      @update:model-value="(column: string) => onChange(column, props.modelValue.filters, props.modelValue.sort)" />
    <filter-input
      :model-value="props.modelValue.filters"
      :options="props.modelValue.column && resultsData && resultsData.length > 0 ? [...new Set(resultsData.map((row: Record<string, any>) => row[props.modelValue.column!]))] : []"
      @update:model-value="(filters: string[]) => onChange(props.modelValue.column, filters, props.modelValue.sort)" />
    <sort-input
      :model-value="props.modelValue.sort"
      @update:model-value="(sort: string) => onChange(props.modelValue.column, props.modelValue.filters, sort)" />
  </a-space>
</template>
