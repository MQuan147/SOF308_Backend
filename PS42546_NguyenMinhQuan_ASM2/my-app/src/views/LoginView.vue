<template>
  <br /><br />
  <div class="container mt-12 d-flex justify-content-between">
    <div class="login-card p-4 rounded shadow-lg w-50">
      <h2 class="text-center mb-4">Đăng Nhập</h2>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Nhập email của bạn"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mật khẩu</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Nhập mật khẩu"
          required
        />
      </div>
      <button @click="login" class="btn btn-primary w-100">Đăng Nhập</button>
      <div class="text-center mt-3">
        <router-link to="/register" class="text-decoration-none"
          >Bạn chưa có tài khoản? Đăng ký</router-link
        >
      </div>
    </div>

    <DotLottieVue
      style="height: 500px; width: 500px; margin-left: 50px"
      autoplay
      loop
      src="https://lottie.host/74bc06d2-b2af-4749-b63f-e67e6f7314c6/NlqWuE7SCE.lottie"
    />
  </div>
  <br /><br /><br /><br /><br />
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const name = ref("");

const login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.email === email.value && u.password === password.value
  );

  if (email.value === "admin@gmail.com" && password.value === "admin") {
    localStorage.setItem("email", email.value);
    localStorage.setItem("name", "Admin");
    alert("Đăng nhập admin thành công!");
    router.replace({ name: "Home" });
  } else if (user) {
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.name);
    alert("Đăng nhập thành công!");
    router.replace({ path: "/" });
  } else {
    alert("Email hoặc mật khẩu không hợp lệ!");
  }
};
</script>

<style scoped>
.container {
  margin-top: 150px !important;
  display: flex;
  justify-content: space-between;
}

.login-card {
  width: 45%;
  padding: 20px;
}

a {
  color: white;
}

label {
  color: white;
}

h2 {
  color: white;
}

.DotLottieVue {
  margin-left: 50px;
}
</style>
