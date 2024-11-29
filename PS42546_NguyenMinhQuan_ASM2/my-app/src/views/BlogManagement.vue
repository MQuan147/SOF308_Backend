<template>
  <div class="container mt-5">
    <h1 class="mb-4">Quản lý Blog</h1>

    <form @submit.prevent="addBlog">
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="newBlog.title"
        />
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">URL hình ảnh</label>
        <input
          type="text"
          class="form-control"
          id="imageUrl"
          v-model="newBlog.imageUrl"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Nội dung</label>
        <textarea
          class="form-control"
          id="content"
          v-model="newBlog.content"
          rows="5"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Thêm Blog</button>
    </form>

    <div v-if="blogs.length" class="mt-4">
      <h3>Danh sách bài viết</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Tác giả</th>
            <th>Ngày tạo</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{ blog.title }}</td>
            <td>
              <img
                :src="blog.imageUrl"
                alt="Blog Image"
                class="img-thumbnail"
                width="100"
              />
            </td>
            <td>{{ blog.author }}</td>
            <td>{{ blog.date }}</td>
            <td>
              <button
                @click="deleteBlog(blog.id)"
                class="btn btn-danger btn-sm"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="showSuccessMessage"
      class="alert alert-success mt-4"
      role="alert"
    >
      Blog đã được thêm thành công!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBlogStore } from "../stores/blog";

// Trạng thái bài viết mới
const newBlog = ref({
  title: "",
  imageUrl: "",
  content: "",
  author: "", // Tên tác giả
  date: "", // Ngày giờ thêm bài viết
});

// Trạng thái hiển thị thông báo thành công
const showSuccessMessage = ref(false);

// Lấy store
const store = useBlogStore();

// Lấy danh sách blogs từ store
const blogs = computed(() => store.blogs);

// Thêm blog mới
const addBlog = () => {
  const email = localStorage.getItem("email"); // Lấy email người dùng từ localStorage

  if (!email) {
    alert("Bạn cần đăng nhập để thêm Blog!");
    return;
  }

  // Gắn tên tác giả và ngày giờ hiện tại
  newBlog.value.author = email;
  newBlog.value.date = new Date().toLocaleString(); // Định dạng ngày giờ

  // Thêm blog vào store
  store.addBlog(newBlog.value);

  // Reset bài viết mới và hiển thị thông báo thành công
  newBlog.value = {
    title: "",
    imageUrl: "",
    content: "",
    author: "",
    date: "",
  };
  showSuccessMessage.value = true;

  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 3000);
};

// Xóa blog theo ID
const deleteBlog = (id) => {
  store.deleteBlog(id); // Gọi phương thức xóa từ store
};
</script>

<style scoped>
.container {
  margin-top: 190px !important;
}
h1,
h3,
label {
  color: white;
}
</style>
