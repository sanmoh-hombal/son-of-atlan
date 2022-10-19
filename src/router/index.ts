import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";

import { useTableStore } from "@store";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("@views/HomeView.vue") },
  { path: "/explorer/:name", name: "explorer", component: () => import("@views/ExplorerView.vue"), props: true },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to) => {
  const tableStore = useTableStore();
  tableStore.refreshActiveTable(to.params.name.toString());
});

export default router;
