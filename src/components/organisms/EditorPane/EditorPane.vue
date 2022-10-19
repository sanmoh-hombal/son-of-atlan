<script setup lang="ts">
import { CaretRightOutlined, SaveOutlined } from "@ant-design/icons-vue";
import { inject } from "vue";

import { CONSTANTS } from "@lib";
import { useTablesStore, useTableStore } from "@store";

const emits = defineEmits(["run", "save"]);

const tablesStore = useTablesStore();
const tableStore = useTableStore();

const resultsLoading = inject<boolean>(CONSTANTS.RESULTS_LOADING_PROVISION_KEY);

const handleRun = (event: MouseEvent) => emits("run", event);
const handleSave = (event: MouseEvent) => emits("save", event);
</script>

<template>
  <a-card title="SQL Editor" style="flex: auto; margin-bottom: 12px">
    <template #extra>
      <a-space size="middle">
        <a-button disabled :loading="tablesStore.loading || resultsLoading" @click="handleSave">
          <template #icon>
            <save-outlined />
          </template>
          Save
        </a-button>
        <a-button :loading="tablesStore.loading || resultsLoading" type="primary" @click="handleRun">
          <template #icon>
            <caret-right-outlined />
          </template>
          Run
        </a-button>
      </a-space>
    </template>
    <editor-input v-model:model-value="tableStore.table!.query" :disabled="tablesStore.loading || resultsLoading" />
  </a-card>
</template>
