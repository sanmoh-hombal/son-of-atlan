import { createPinia, type Pinia } from "pinia";
import { createApp, type App as VueApp } from "vue";

import STable, { setLicenseKey } from "@surely-vue/table";

import App from "@/App.vue";
import { CONSTANTS } from "@lib";
import router from "@router";
import { useTablesStore } from "@store";

import "@surely-vue/table/dist/index.min.css";
import "ant-design-vue/dist/antd.min.css";

const pinia: Pinia = createPinia();
const app: VueApp<Element> = createApp(App);

app.use(pinia);

const tablesStore = useTablesStore();
await tablesStore.refreshTables();

app.use(router);
app.use(STable);

setLicenseKey(CONSTANTS.SURELY_API_KEY);

app.mount("#app");
