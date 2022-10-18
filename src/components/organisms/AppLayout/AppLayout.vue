<script setup lang="ts">
import { AppBar, AppSideBar } from "@components/molecules";
import { useTableStore } from "@store";

const tableStore = useTableStore();
</script>

<template>
  <a-layout style="height: 100vh">
    <app-bar />
    <a-layout>
      <a-layout-sider>
        <app-side-bar />
      </a-layout-sider>
      <a-layout-content v-if="tableStore.table && tableStore.table.name" style="padding: 12px">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
