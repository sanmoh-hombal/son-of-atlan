import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";

import { useTableStore } from "@store";
import { ExplorerView, HomeView } from "@views";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomeView },
  { path: "/explorer/:name", name: "explorer", component: ExplorerView, props: true },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

router.afterEach((to) => {
  const tableStore = useTableStore();
  tableStore.refreshActiveTable(to.params.name.toString());
});

export default router;
