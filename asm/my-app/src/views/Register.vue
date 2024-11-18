<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="card p-4 shadow" style="width: 100%; max-width: 400px">
      <h3 class="text-center mb-4">Đăng ký</h3>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label for="name" class="form-label">Họ và Tên</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="name"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            placeholder="Nhập email của bạn"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mật khẩu</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100 mb-2">
          Đăng ký
        </button>
      </form>
      <div class="text-center mt-3">
        <p>
          Bạn đã có tài khoản?
          <a @click="goToLogin" class="text-primary" href="#">Đăng nhập</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.card {
  border-radius: 8px;
}
</style>
