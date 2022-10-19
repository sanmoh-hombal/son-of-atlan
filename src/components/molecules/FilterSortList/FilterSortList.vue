<script setup lang="ts">
import { PlusOutlined } from "@ant-design/icons-vue";

import type { TYPES } from "@lib";

export interface IFilterSortListProps {
  modelValue: TYPES.IFilterSortModelValue[];
}

const props = defineProps<IFilterSortListProps>();
const emits = defineEmits(["update:modelValue"]);

const onChange = (filterSort: TYPES.IFilterSortModelValue, index: number) => {
  const arrayCopy: TYPES.IFilterSortModelValue[] = [...props.modelValue];
  arrayCopy[index] = filterSort;
  emits("update:modelValue", arrayCopy);
};

const onAdd = () => {
  const arrayCopy: TYPES.IFilterSortModelValue[] = [...props.modelValue];
  arrayCopy.push({});
  emits("update:modelValue", arrayCopy);
};
</script>

<template>
  <a-space>
    <template v-for="(_, index) in props.modelValue" :key="index">
      <filter-sort
        :model-value="props.modelValue[index]"
        @update:model-value="(value: any) => onChange(value, index)" />
      <a-button
        v-if="index + 1 === props.modelValue.length"
        :disabled="
          !props.modelValue[index].column || !(props.modelValue[index].filters || props.modelValue[index].sort)
        "
        type="primary"
        @click="onAdd">
        <template #icon>
          <plus-outlined />
        </template>
      </a-button>
      <a-divider v-if="index + 1 !== props.modelValue.length" type="vertical" />
    </template>
  </a-space>
</template>
