import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";

import { ExplorerView, HomeView } from "@views";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomeView },
  { path: "/explorer/:name", name: "explorer", component: ExplorerView, props: true },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

export default router;
