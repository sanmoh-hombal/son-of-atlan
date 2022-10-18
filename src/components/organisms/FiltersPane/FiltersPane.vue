<script setup lang="ts">
import { ref } from "vue";

import { FilterSortList } from "@components/organisms";
import type { TYPES } from "@lib";

const model = ref<TYPES.IFilterSortModelValue[]>([{}]);
</script>

<template>
  <a-card style="margin-bottom: 12px">
    <filter-sort-list v-model:model-value="model" />
  </a-card>
</template>
