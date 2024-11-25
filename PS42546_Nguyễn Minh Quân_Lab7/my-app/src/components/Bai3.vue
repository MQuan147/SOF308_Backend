<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>Form Đăng Kí</h3>
        <form @submit.prevent="handleSubmit" class="border px-3 py-4 rounded">
          <div class="mb-3">
            <label for="name" class="form-label">Họ và Tên</label>
            <input
              v-model="registerForm.name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Họ và tên"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              v-model="registerForm.email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="dob" class="form-label">Ngày Sinh</label>
            <input
              v-model="registerForm.dob"
              type="date"
              class="form-control"
              id="dob"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">Số Điện Thoại</label>
            <input
              v-model="registerForm.phone"
              type="number"
              class="form-control"
              id="phoneNumber"
              placeholder="Số Điện Thoại"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mật Khẩu</label>
            <input
              v-model="registerForm.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Mật Khẩu"
              required
            />
          </div>
          <div class="mb-3">
            <label for="confirm" class="form-label">Xác Nhận Mật Khẩu</label>
            <input
              v-model="registerForm.confirm"
              type="password"
              class="form-control"
              id="confirm"
              placeholder="Xác Nhận Mật Khẩu"
              required
            />
          </div>
          <!-- Radio giới tính -->
          <div class="form-check-inline">Giới tính:</div>
          <div class="form-check form-check-inline">
            <input
              v-model="registerForm.gender"
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Nam"
            />
            <label class="form-check-label" for="male"> Nam </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="registerForm.gender"
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Nữ"
              checked
            />
            <label class="form-check-label" for="female"> Nữ </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="registerForm.gender"
              class="form-check-input"
              type="radio"
              name="gender"
              id="other"
              value="Khác"
            />
            <label class="form-check-label" for="other"> Khác </label>
          </div>
          <!-- selected Ngôn ngữ -->
          <div class="mt-3">
            <div class="form-check-inline">Ngôn ngữ</div>
            <div class="form-check form-check-inline">
              <input
                v-model="registerForm.languages"
                class="form-check-input"
                type="checkbox"
                value="Tiếng Việt"
                id="vietnamese"
                checked
              />
              <label class="form-check-label" for="vietnamese">
                Tiếng Việt
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="registerForm.languages"
                class="form-check-input"
                type="checkbox"
                value="Tiếng Anh"
                id="english"
              />
              <label class="form-check-label" for="english"> Tiếng Anh </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="registerForm.languages"
                class="form-check-input"
                type="checkbox"
                value="Tiếng Nhật"
                id="japanese"
              />
              <label class="form-check-label" for="japanese">
                Tiếng Nhật
              </label>
            </div>
          </div>
          <!-- btn -->
          <div class="mt-3">
            <button type="submit" class="btn btn-primary">Đăng Kí</button>
          </div>
        </form>
      </div>
      <div v-if="submitted" class="col-md-6">
        <h2>Thông tin đã đăng kí</h2>
        <p><strong>Họ tên: </strong>{{ registerForm.name }}</p>
        <p><strong>Email: </strong>{{ registerForm.email }}</p>
        <p><strong>Số điện thoại: </strong>{{ registerForm.phone }}</p>
        <p><strong>Giới tính: </strong>{{ registerForm.gender }}</p>
        <p>
          <strong>Ngôn ngữ: </strong>{{ registerForm.languages.join(", ") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const registerForm = reactive({
  name: "",
  email: "",
  phone: "",
  dob: "",
  password: "",
  gender: "",
  languages: [],
});

// Biến theo dõi trạng thái đã gửi form
const submitted = ref(false);

// Hàm xử lý khi submit form
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style>
.container {
  margin-top: 50px;
}
</style>
