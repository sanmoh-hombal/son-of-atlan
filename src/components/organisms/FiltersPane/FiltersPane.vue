<script setup lang="ts">
import { FilterSortList } from "@components/molecules";
import type { TYPES } from "@lib";

export interface IFiltersPaneProps {
  modelValue: TYPES.IFilterSortModelValue[];
}

const props = defineProps<IFiltersPaneProps>();
const emit = defineEmits(["update:modelValue"]);

const onUpdate = (values: TYPES.IFilterSortModelValue[]) => emit("update:modelValue", values);
</script>

<template>
  <a-card style="margin-bottom: 12px">
    <filter-sort-list :model-value="props.modelValue" @update:model-value="onUpdate" />
  </a-card>
</template>
