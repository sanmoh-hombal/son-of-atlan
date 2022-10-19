<script setup lang="ts">
import { DownloadOutlined } from "@ant-design/icons-vue";
import { inject } from "vue";

import { CONSTANTS } from "@lib";
import { ResultsService } from "@services";
import { useTableStore } from "@store";

const tablesStore = useTableStore();

const resultsData = inject<Record<string, any>[]>(CONSTANTS.RESULTS_DATA_PROVISION_KEY);
const resultsDuration = inject<Record<string, any>[]>(CONSTANTS.RESULTS_DURATION_PROVISION_KEY);
const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);
</script>

<template>
  <a-card :body-style="{ display: 'flex', alignItems: 'center', padding: '12px' }">
    <div style="flex: 1">
      <a-typography-text type="secondary">
        Query Time: {{ resultsData ? resultsDuration + "s" : "Loading" }}
      </a-typography-text>
    </div>
    <a-space>
      <a-typography-text type="secondary">
        {{ resultsData ? resultsData.length + " Rows" : "Loading" }}
      </a-typography-text>
      <a-button :loading="resultsLoading" @click="ResultsService.download(resultsData!, tablesStore.table!.name)">
        <template #icon>
          <download-outlined key="download" />
        </template>
        Download
      </a-button>
    </a-space>
  </a-card>
</template>
