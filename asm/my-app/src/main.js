import { createApp } from "vue";
import App from "./App.vue";

// Đường dẫn phải chính xác
import router from "./router"; // Đường dẫn phải chính xác

// Bootstrap CSS và JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(router); // Sử dụng router
app.mount("#app");
