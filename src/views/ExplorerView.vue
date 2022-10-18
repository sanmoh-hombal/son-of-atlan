<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";

import { ActionsPane, EditorPane, FiltersPane, ResultPane } from "@components/organisms";
import { CONSTANTS, TYPES } from "@lib";
import { ResultsService } from "@services";
import { useTableStore } from "@store";

export interface IExplorerViewProps {
  name: string;
}

const props = defineProps<IExplorerViewProps>();
const tableStore = useTableStore();

const filterSorts = ref<TYPES.IFilterSortModelValue[]>([{}]);
const results = ref<Record<string, any>[]>([]);
const loading = ref<boolean>(false);

provide(CONSTANTS.RESULTS_DATA_PROVISION_KEY, results);
provide(CONSTANTS.RESULTS_LOADING_PROVISION_KEY, loading);

const refresh = async () => {
  loading.value = true;
  results.value = await ResultsService.get(tableStore.table!.data_url);
  loading.value = false;
};

onMounted(async () => await refresh());
watch(
  () => props.name,
  async () => await refresh()
);
</script>

<template>
  <div style="display: flex; flex-direction: column; height: 100%">
    <editor-pane @run="refresh" />
    <filters-pane v-model:model-value="filterSorts" />
    <result-pane />
    <actions-pane />
  </div>
</template>
