<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";

import { EditorPane } from "@components/organisms";
import { CONSTANTS } from "@lib";
import { ResultsService } from "@services";
import { useTableStore } from "@store";

export interface IExplorerViewProps {
  name: string;
}

const props = defineProps<IExplorerViewProps>();
const tableStore = useTableStore();

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
  <editor-pane @run="refresh" />
</template>
