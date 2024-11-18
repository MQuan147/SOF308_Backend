import { createRouter, createWebHistory } from "vue-router";

// Import các component
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

// Định nghĩa các route
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
      },
    ],
  },
  {
    path: "/register",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Register",
        component: Register,
        meta: { requiresGuest: true },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/", // Chuyển hướng tất cả các đường dẫn không tồn tại về trang chủ
  },
];

// Tạo router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Route Guard: Kiểm tra trạng thái đăng nhập

export default router;
