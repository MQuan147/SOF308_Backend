// src/main.js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import router from "./router"; // Dùng default import
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
