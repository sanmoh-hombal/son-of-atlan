<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { BorderlessTableOutlined, HomeOutlined } from "@ant-design/icons-vue";

import { useTablesStore } from "@store";

const route = useRoute();
const router = useRouter();
const tablesStore = useTablesStore();

const activeItem = computed((): string[] => {
  if (route.name === "home") return ["home"];
  if (route.name === "explorer" && route.params.name) return [route.params.name.toString()];

  return [];
});

/** Redirect using key and keyPaths ingested from a-menu @click event */
function redirect({ key, keyPath }: { key: string; keyPath: string[] }) {
  if (key === "home") router.push("/");
  else router.push(`/${keyPath.join("/")}`);
}
</script>

<template>
  <a-menu :selected-keys="activeItem" mode="inline" :open-keys="['explorer']" style="height: 100%" @click="redirect">
    <a-menu-item key="home">
      <template #icon>
        <home-outlined />
      </template>
      Home
    </a-menu-item>
    <a-sub-menu key="explorer">
      <template #icon>
        <borderless-table-outlined />
      </template>
      <template #title>Explorer</template>
      <div v-if="tablesStore.loading" style="text-align: center">
        <a-spin />
      </div>
      <template v-else>
        <a-menu-item v-for="table in tablesStore.tables" :key="table.name">
          {{ table.name }}
        </a-menu-item>
      </template>
    </a-sub-menu>
  </a-menu>
</template>
