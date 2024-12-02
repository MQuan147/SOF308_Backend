<template>
  <div class="container my-5">
    <br />
    <h2>Thông Tin Người Dùng</h2>
    <br />
    <form @submit.prevent="updateProfile">
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
          disabled
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
        <select class="form-control" id="gender" v-model="user.gender" required>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Cập Nhật</button>
    </form>
  </div>
  <br />
  <br />
</template>

<script setup>
import { ref, onMounted } from "vue";

const user = ref({
  name: "",
  email: "",
  password: "",
  dob: "",
  gender: "male",
  avatar: "",
});

const loadUserProfile = () => {
  const email = localStorage.getItem("email");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users.find((u) => u.email === email);

  if (currentUser) {
    user.value = { ...currentUser };
  }
};

const updateProfile = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.email === user.value.email);

  if (index !== -1) {
    users[index] = { ...user.value };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cập nhật thành công!");
  }
};

// Gọi hàm tải thông tin khi component được tạo
onMounted(() => {
  loadUserProfile();
});
</script>

<style scoped>
.container {
  max-width: 1600px;
  width: 800px;
  margin-top: 120px !important;
}

img {
  max-width: 100%;
  height: auto;
}
label,
h2 {
  color: white;
}
</style>
