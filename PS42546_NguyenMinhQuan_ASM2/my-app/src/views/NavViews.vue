<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Hiển thị Home và BlogList luôn -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog List</router-link>
          </li>

          <!-- Hiển thị Login và Register nếu chưa đăng nhập -->
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>

          <!-- Hiển thị các mục khi đăng nhập bằng tài khoản Author -->
          <li class="nav-item" v-if="isLoggedIn && userType === 'author'">
            <router-link class="nav-link" to="/blog-manage"
              >QL Blog</router-link
            >
          </li>
          <!-- Hiển thị các mục khi đăng nhập bằng tài khoản Admin -->
          <li class="nav-item" v-if="isLoggedIn && userType === 'admin'">
            <router-link class="nav-link" to="/account-manage"
              >QL User</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn && userType === 'admin'">
            <router-link class="nav-link" to="/blog-manage"
              >QL Blog</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn && userType === 'admin'">
            <router-link class="nav-link" to="/comment-manage"
              >QL Comment</router-link
            >
          </li>

          <!-- Hiển thị nút Logout khi đã đăng nhập -->
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const isLoggedIn = ref(false);
const userType = ref("");
const router = useRouter();
const route = useRoute();

// Hàm kiểm tra trạng thái đăng nhập
const checkLoginStatus = () => {
  const email = localStorage.getItem("email");
  if (email) {
    isLoggedIn.value = true;
    if (email === "admin@gmail.com") {
      userType.value = "admin";
    } else if (email === "author1@gmail.com" || email === "author2@gmail.com") {
      userType.value = "author";
    } else {
      userType.value = "user";
    }
  } else {
    isLoggedIn.value = false;
    userType.value = "";
  }
};

// Hàm đăng xuất
const logout = () => {
  localStorage.removeItem("email");
  isLoggedIn.value = false;
  userType.value = "";
  router.push({ name: "Login" }); // Chuyển hướng về trang đăng nhập
};

// Theo dõi thay đổi của route để cập nhật navbar
watch(
  () => route.path,
  () => {
    checkLoginStatus();
  }
);

// Kiểm tra trạng thái đăng nhập khi component được gắn
checkLoginStatus();
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  margin-top: 80px; /* Đảm bảo navbar luôn ở phía trên các phần tử khác */
}

.container-fluid {
  padding: 0 15px; /* Đảm bảo khoảng cách ngang hợp lý */
}

body {
  padding-top: 60px; /* Chỉnh lại khoảng cách để không bị che bởi navbar */
}
</style>
