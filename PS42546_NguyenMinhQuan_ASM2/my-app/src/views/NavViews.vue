<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand"></a>
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

          <li class="nav-item" v-if="isLoggedIn && userType === 'user'">
            <router-link class="nav-link" to="/blog-manage"
              >QL Blog</router-link
            >
          </li>

          <!-- Admin -->
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

          <li class="nav-item" v-if="isLoggedIn && userType === 'user'">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>

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
  router.replace({ name: "Login" });
};

watch(
  () => route.path,
  () => {
    checkLoginStatus();
  }
);

checkLoginStatus();
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  margin-top: 80px;
  margin-bottom: 50px !important;
}

.container-fluid {
  padding: 0 15px;
}

body {
  padding-top: 60px;
}
</style>
