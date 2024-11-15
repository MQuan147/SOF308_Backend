import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BootstrapVue3 } from "bootstrap-vue-3";

const app = createApp(App);

// Đăng ký BootstrapVue3 vào ứng dụng Vue
app.use(BootstrapVue3);

app.mount("#app");
