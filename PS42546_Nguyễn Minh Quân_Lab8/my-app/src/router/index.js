import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeViews.vue";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import UserProfile from "../views/UserProfile.vue";
import Login from "../views/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import UserSettings from "../views/UserSettings.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "BlogList", component: BlogList },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: BlogPost,
    props: (route) => ({ blog: route.params.blogData }),
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },

  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    alias: "/me",
    children: [
      {
        path: "settings",
        name: "UserSettings",
        component: UserSettings,
      },
    ],
  },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
