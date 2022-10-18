<script setup lang="ts">
import { DownloadOutlined } from "@ant-design/icons-vue";
import { inject } from "vue";

import { CONSTANTS } from "@lib";
import { ResultsService } from "@services";
import { useTableStore } from "@store";

const tablesStore = useTableStore();

const resultsData = inject<Record<string, any>[]>(CONSTANTS.RESULTS_DATA_PROVISION_KEY);
const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);
</script>

<template>
  <a-card :body-style="{ display: 'flex', padding: '12px' }">
    <div style="flex: 1"></div>
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
