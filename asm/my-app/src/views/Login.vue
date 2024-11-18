<template>
  <div class="col-md-6">
    <h3>Form Đăng Nhập</h3>
    <form class="border px-3 py-4 rounded">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Mật Khẩu</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Đăng Nhập</button>
      <button type="button" class="btn btn-secondary" @click="$emit('close')">
        Đóng
      </button>
    </form>
  </div>
</template>

<script></script>

<style scoped>
.card {
  border-radius: 8px;
}
</style>
