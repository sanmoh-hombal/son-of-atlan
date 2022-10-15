import { createRouter, createWebHistory, type RouteRecordRaw, type Router } from "vue-router";

import { ExplorerView, HomeView } from "@views";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomeView },
  { path: "/explorer", name: "explorer", component: ExplorerView },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

export default router;
