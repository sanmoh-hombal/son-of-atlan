<script setup lang="ts">
import { BorderlessTableOutlined, HomeOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <a-menu mode="inline" style="height: 100%">
    <a-menu-item key="home">
      <template #icon>
        <home-outlined />
      </template>
      Home
    </a-menu-item>
    <a-sub-menu>
      <template #icon>
        <borderless-table-outlined />
      </template>
      <template #title>Explorer</template>
      <a-menu-item key="categories">categories</a-menu-item>
      <a-menu-item key="orders">orders</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
