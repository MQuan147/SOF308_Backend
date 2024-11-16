<template>
  <div class="login-form-container">
    <div class="col-md-6">
      <h3>Form Đăng Nhập</h3>
      <form class="border px-3 py-4 rounded">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mật Khẩu</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="handleLogin">
          Đăng Nhập
        </button>
        <button
          type="button"
          class="btn btn-secondary ms-2"
          @click="$emit('close')"
        >
          Đóng
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Xử lý logic đăng nhập
      console.log("Đăng nhập với:", this.email, this.password);
      alert("Đăng nhập thành công!");
      this.$emit("close"); // Đóng form sau khi đăng nhập
    },
  },
};
</script>

<style scoped>
/* CSS cho vị trí và kiểu hiển thị của form đăng nhập */
.login-form-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1050;
  padding: 20px;
  border-radius: 10px;
}
</style>
