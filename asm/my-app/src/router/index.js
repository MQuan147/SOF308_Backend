import { createRouter, createWebHistory } from "vue-router";

import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
