<template>
  <div class="m-5 col-sm-3">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username">Tên đăng nhập: </label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="Nhập tên đăng nhập"
        />
      </div>
      <div class="mb-3">
        <label for="password">Mật khẩu: </label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <button class="btn btn-primary" type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const emit = defineEmits(["loggedIn"]);

function handleLogin() {
  if (username.value && password.value) {
    emit("loggedIn", username.value);
  }
}
</script>

<style></style>
