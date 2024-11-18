<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Trang Chủ</router-link>
        <router-link v-if="!isLoggedIn" to="/login">Đăng Nhập</router-link>
        <router-link v-if="!isLoggedIn" to="/register">Đăng Ký</router-link>
        <router-link v-if="isLoggedIn" to="/profile">Hồ Sơ</router-link>
        <button v-if="isLoggedIn" @click="logout">Đăng Xuất</button>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script></script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background: #007bff;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
}
nav button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
