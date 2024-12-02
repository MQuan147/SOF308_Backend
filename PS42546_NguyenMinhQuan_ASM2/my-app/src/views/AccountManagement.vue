<template>
  <div class="container my-5">
    <br />
    <h2>Quản Lý Tài Khoản Người Dùng</h2>
    <br />

    <!-- Danh sách người dùng -->
    <div v-if="users.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Ngày Sinh</th>
            <th>Giới Tính</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.dob }}</td>
            <td>
              <span v-if="user.gender === 'male'">Nam</span>
              <span v-else-if="user.gender === 'female'">Nữ</span>
              <span v-else>Khác</span>
            </td>
            <td>
              <button
                class="btn btn-sm btn-warning me-2"
                @click="editUser(user)"
              >
                Sửa
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="deleteUser(user.email)"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Không có người dùng nào.</p>
    </div>

    <br />

    <!-- Form cập nhật người dùng -->
    <div v-if="user">
      <form @submit.prevent="updateUser">
        <h4>Chỉnh Sửa Thông Tin Người Dùng</h4>
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

        <button type="submit" class="btn btn-primary">
          Cập Nhật Thông Tin
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);
const user = ref(null);

// Tải danh sách người dùng từ localStorage
const loadUsers = () => {
  users.value = JSON.parse(localStorage.getItem("users")) || [];
};

// Chỉnh sửa người dùng
const editUser = (selectedUser) => {
  user.value = { ...selectedUser };
};

// Cập nhật thông tin người dùng
const updateUser = () => {
  const index = users.value.findIndex((u) => u.email === user.value.email);
  if (index !== -1) {
    users.value[index] = { ...user.value };
    localStorage.setItem("users", JSON.stringify(users.value));
    alert("Cập nhật thông tin người dùng thành công!");
    user.value = null;
    loadUsers();
  } else {
    alert("Không thể cập nhật thông tin người dùng.");
  }
};

// Xóa người dùng
const deleteUser = (email) => {
  if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
    users.value = users.value.filter((u) => u.email !== email);
    localStorage.setItem("users", JSON.stringify(users.value));
    alert("Xóa người dùng thành công!");
    if (user.value && user.value.email === email) {
      user.value = null; // Reset form sau chỉnh sửa
    }
  }
};

// Tải dữ liệu người dùng khi component được tạo
onMounted(() => {
  loadUsers();
});
</script>

<style scoped>
.container {
  margin-top: 170px !important;
}
h2,
label,
h4 {
  color: white !important;
}
</style>
