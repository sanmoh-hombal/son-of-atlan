import { createApp, type App as VueApp } from "vue";

import App from "@/App.vue";

const app: VueApp<Element> = createApp(App);

app.mount("#app");
