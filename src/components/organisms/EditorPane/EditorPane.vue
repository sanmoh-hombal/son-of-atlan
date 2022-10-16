<script setup lang="ts">
import { CaretRightOutlined } from "@ant-design/icons-vue";

import { EditorInput } from "@components/atoms";
import { useTablesStore, useTableStore } from "@store";

const tablesStore = useTablesStore();
const tableStore = useTableStore();
</script>

<template>
  <a-card title="SQL Editor" :loading="tablesStore.loading">
    <template #extra>
      <a-space size="middle">
        <a-button type="primary">
          <template #icon>
            <caret-right-outlined />
          </template>
          Run
        </a-button>
      </a-space>
    </template>
    <editor-input :disabled="tablesStore.loading" v-model:model-value="tableStore.table!.query" />
  </a-card>
</template>
