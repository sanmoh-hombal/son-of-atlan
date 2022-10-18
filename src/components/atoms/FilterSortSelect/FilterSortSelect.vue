<script setup lang="ts">
import { inject } from "vue";

import { CONSTANTS } from "@lib";
import { useTablesStore } from "@store";

export interface IFilterSortSelect {
  modelValue?: string;
  options: string[];
}

const props = defineProps<IFilterSortSelect>();
const tablesStore = useTablesStore();

const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);

const emit = defineEmits(["update:modelValue"]);
const onSelect = (value: string) => emit("update:modelValue", value);
</script>

<template>
  <a-select
    allow-clear
    :loading="resultsLoading || tablesStore.loading"
    :options="props.options.map((option: string) => ({ value: option, label: option }))"
    placeholder="Select a Column"
    :value="props.modelValue"
    @change="onSelect" />
</template>
