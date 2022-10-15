import { createApp, type App as VueApp } from "vue";

import Antd from "ant-design-vue";
import "ant-design-vue/es/message/style/css";

import App from "@/App.vue";
import router from "@router";

const app: VueApp<Element> = createApp(App);

app.use(router);
app.use(Antd);

app.mount("#app");
