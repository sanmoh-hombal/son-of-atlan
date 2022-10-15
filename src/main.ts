import { createApp, type App as VueApp } from "vue";

import Antd from "ant-design-vue";

import App from "@/App.vue";
import router from "@router";

import "ant-design-vue/dist/antd.css";

const app: VueApp<Element> = createApp(App);

app.use(router);
app.use(Antd);

app.mount("#app");
