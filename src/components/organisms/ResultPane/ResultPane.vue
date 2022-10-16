<script setup lang="ts">
import { ResultTable } from "@components/atoms";
</script>

<template>
  <a-card style="flex: 30vh" :body-style="{ padding: 0, overflowX: 'scroll' }">
    <result-table />
  </a-card>
</template>
