<script setup lang="ts">
import { inject, ref } from "vue";

import { CONSTANTS } from "@lib";
import { useTablesStore } from "@store";

export interface IFilterSortSelect {
  disabled?: boolean;
  modelValue?: string;
}

const props = defineProps<IFilterSortSelect>();
const emits = defineEmits(["update:modelValue"]);

const tablesStore = useTablesStore();

const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);
const baseOptions = ref<Record<string, any>[]>(CONSTANTS.BASE_SORT_OPTIONS);

const onSelect = (value: string[]) => emits("update:modelValue", value);
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
