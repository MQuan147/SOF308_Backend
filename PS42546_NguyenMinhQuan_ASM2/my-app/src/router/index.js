import { createRouter, createWebHistory } from "vue-router";

import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import UserProfile from "../views/UserProfile.vue";
import RegisterView from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import UserSettings from "../views/UserSettings.vue";
import Admin from "../views/Admin.vue";
import AccountManagement from "../views/AccountManagement.vue";
import BlogManagement from "../views/BlogManagement.vue";
import CommentManagement from "../views/CommentManagement.vue";
import HomeViews from "../views/HomeViews.vue";

const checkAdmin = (to, from, next) => {
  const email = localStorage.getItem("email");
  const isAdmin = email === "admin@gmail.com";

  if (isAdmin) {
    next();
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    alert("Phát hiện nghi vấn hack! Đăng xuất!");
    next({ name: "Login" });
  }
};

const routes = [
  { path: "/", name: "Home", component: HomeViews },
  {
    path: "/blog",
    name: "BlogList",
    component: BlogList,
  },
  {
    path: "/comment-manage",
    name: "CommentManagement",
    component: CommentManagement,
    beforeEnter: checkAdmin,
  },
  {
    path: "/blog-manage",
    name: "BlogManagement",
    component: BlogManagement,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/account-manage",
    name: "AccountManagement",
    component: AccountManagement,
    beforeEnter: checkAdmin,
  },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: BlogPost,
    props: true,
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
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
    beforeEnter: (to, from, next) => {
      const email = localStorage.getItem("email");
      if (email) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
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
