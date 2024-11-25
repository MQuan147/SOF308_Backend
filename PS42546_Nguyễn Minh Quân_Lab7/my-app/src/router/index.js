import { createRouter, createWebHistory } from "vue-router";
import Bai1 from "../components/Bai1.vue";
import Bai2 from "../components/Bai2.vue";
import Bai3 from "../components/Bai3.vue";
import Bai4 from "../components/Bai4.vue";
const routes = [
  {
    path: "/bai1",
    name: "Bai1",
    component: Bai1,
  },
  {
    path: "/bai2",
    name: "Bai2",
    component: Bai2,
  },
  {
    path: "/bai3",
    name: "Bai3",
    component: Bai3,
  },
  {
    path: "/bai4",
    name: "Bai4",
    component: Bai4,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
