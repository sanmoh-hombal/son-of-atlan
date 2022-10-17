<script setup lang="ts">
export interface IResultTableProps {
  loading?: boolean;
  data?: Record<string, any>[];
}

const props = defineProps<IResultTableProps>();
</script>

<template>
  <s-table
    v-if="props.data && props.data.length > 0"
    bordered
    sticky
    :scroll="{
      x: '100%',
      y: '50vh',
    }"
    :pagination="false"
    :loading="props.loading"
    :dataSource="[...props.data.map((result: Record<string, any>, key: number) => ({ key, ...result }))]"
    :columns="Object.keys([...props.data][0]).map((key: string) => ({ title: key, dataIndex: key, ellipsis: true, key }))" />
</template>
