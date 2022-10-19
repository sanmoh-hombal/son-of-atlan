<script setup lang="ts">
import type { TYPES } from "@lib";

export interface IFiltersPaneProps {
  modelValue: TYPES.IFilterSortModelValue[];
}

const props = defineProps<IFiltersPaneProps>();
const emits = defineEmits(["update:modelValue"]);

const onUpdate = (values: TYPES.IFilterSortModelValue[]) => emits("update:modelValue", values);
</script>

<template>
  <a-card :body-style="{ padding: '12px', overflowX: 'auto', marginRight: '12px' }" style="margin-bottom: 12px">
    <filter-sort-list :model-value="props.modelValue" @update:model-value="onUpdate" />
  </a-card>
</template>
