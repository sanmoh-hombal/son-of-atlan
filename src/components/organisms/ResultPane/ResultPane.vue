<script setup lang="ts">
import { inject } from "vue";

import { ResultTable } from "@components/atoms";
import { CONSTANTS } from "@lib";

const resultsData = inject<Record<string, any>[]>(CONSTANTS.RESULTS_DATA_PROVISION_KEY);
const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);
</script>

<template>
  <a-card style="flex: 30vh; margin-bottom: 12px" :body-style="{ padding: 0, overflowX: 'scroll' }">
    <result-table :loading="resultsLoading" :data="resultsData" />
  </a-card>
</template>
