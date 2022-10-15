import { createApp, type App as VueApp } from "vue";

import App from "@/App.vue";
import router from "@router";

const app: VueApp<Element> = createApp(App);

app.use(router);

app.mount("#app");
