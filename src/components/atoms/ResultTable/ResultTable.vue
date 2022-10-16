<script setup lang="ts">
import { inject } from "vue";

import { CONSTANTS } from "@lib";

const resultsData = inject(CONSTANTS.RESULTS_DATA_PROVISION_KEY);
const resultsLoading = inject(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);
</script>

<template>
  <a-table
    v-if="resultsData && (resultsData as Record<string, any>[]).length > 0"
    sticky
    :scroll="{
      x: '100%',
      y: 649,
    }"
    :pagination="false"
    :loading="resultsLoading"
    :dataSource="[...(resultsData as Record<string, any>[]).map((result: Record<string, any>, key: number) => ({ key, ...result }))]"
    :columns="Object.keys([...(resultsData as Record<string, any>[])][0]).map((key: string) => ({ title: key, dataIndex: key, ellipsis: true, key }))"
    :row-class-name="(_record: Record<string, any>, index: number) => (index % 2 === 1 ? 'table-striped' : null)" />
</template>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
