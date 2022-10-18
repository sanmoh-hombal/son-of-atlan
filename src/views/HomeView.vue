<script setup lang="ts">
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons-vue";

import { useTablesStore } from "@store";

const tablesStore = useTablesStore();
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <a-space direction="vertical" style="width: 75%">
      <a-typography-title :level="5">Hey There ! Click on any of the tables below to navigate</a-typography-title>
      <a-typography-title :level="3">
        Happy Querying <span style="margin-left: 12px">&#127881;</span>
      </a-typography-title>
      <a-row :gutter="12">
        <a-col v-for="table in tablesStore.tables" :key="table.name" :span="8" style="margin-bottom: 12px">
          <a-card hoverable>
            <a-card-meta :title="table.name" :description="table.description" />
            <template #actions>
              <a-tooltip>
                <template #title> Download </template>
                <download-outlined key="download" />
              </a-tooltip>
              <a-tooltip>
                <template #title> Open Table </template>
                <arrow-right-outlined key="redirect" @click="$router.push(`/explorer/${table.name}`)" />
              </a-tooltip>
            </template>
          </a-card>
        </a-col>
      </a-row>
    </a-space>
  </div>
</template>
