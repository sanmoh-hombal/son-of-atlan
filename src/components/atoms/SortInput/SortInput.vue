<script setup lang="ts">
import { inject, ref } from "vue";

import { CONSTANTS } from "@lib";
import { useTablesStore } from "@store";

export interface IFilterSortSelect {
  disabled?: boolean;
  modelValue?: string;
}

const props = defineProps<IFilterSortSelect>();
const tablesStore = useTablesStore();

const baseOptions = ref<Record<string, any>[]>([
  { value: CONSTANTS.SORT_ASCENDING, label: CONSTANTS.SORT_ASCENDING },
  { value: CONSTANTS.SORT_DESSCENDING, label: CONSTANTS.SORT_DESSCENDING },
]);

const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);

const emit = defineEmits(["update:modelValue"]);
const onSelect = (value: string[]) => emit("update:modelValue", value);
</script>

<template>
  <a-select
    allow-clear
    :disabled="props.disabled"
    :loading="resultsLoading || tablesStore.loading"
    :options="baseOptions"
    placeholder="Add Sort"
    :value="props.modelValue"
    @change="onSelect" />
</template>
