<template>
  <div class="container my-5 d-flex align-items-center">
    <!-- Form đăng ký -->
    <div class="form-container">
      <h2>Đăng Ký Tài Khoản</h2>
      <form @submit.prevent="registerUser">
        <div class="mb-3">
          <label for="name" class="form-label">Họ Tên</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="user.name"
            required
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="user.email"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Mật Khẩu</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="user.password"
            required
          />
        </div>

        <div class="mb-3">
          <label for="dob" class="form-label">Ngày Sinh</label>
          <input
            type="date"
            class="form-control"
            id="dob"
            v-model="user.dob"
            required
          />
        </div>

        <div class="mb-3">
          <label for="gender" class="form-label">Giới Tính</label>
          <select
            class="form-control"
            id="gender"
            v-model="user.gender"
            required
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Đăng Ký</button>
      </form>
    </div>
    <DotLottieVue
      style="height: 500px; width: 500px; margin-right: 200px"
      autoplay
      loop
      src="https://lottie.host/c7797a8e-656d-4d48-8760-81208f054306/ftNKmYan6l.lottie"
    />
  </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = ref({
  name: "",
  email: "",
  password: "",
  dob: "",
  gender: "male",
});

const registerUser = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.some((u) => u.email === user.value.email);
  if (emailExists) {
    alert("Email đã được sử dụng!");
    return;
  }

  users.push(user.value);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công!");
  router.push({ name: "Login" });
};
</script>

<style scoped>
.container {
  max-width: 1600px;
  width: 100%;
  margin-top: 200px !important;
  display: flex;
  justify-content: space-between;
}
.form-container {
  flex: 1;
  max-width: 600px;
  margin-left: 200px;
}
.icon-container {
  flex-shrink: 0;
  text-align: center;
}
label,
h2 {
  color: white;
}
</style>
