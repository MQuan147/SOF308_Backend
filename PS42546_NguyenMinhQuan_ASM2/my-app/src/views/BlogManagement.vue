<template>
  <div class="container mt-5">
    <h1 class="mb-4">Quản lý Blog</h1>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="blogForm.title"
        />
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">URL hình ảnh</label>
        <input
          type="text"
          class="form-control"
          id="imageUrl"
          v-model="blogForm.imageUrl"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Nội dung</label>
        <textarea
          class="form-control"
          id="content"
          v-model="blogForm.content"
          rows="5"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEditing ? "Cập nhật Blog" : "Thêm Blog" }}
      </button>
      <button
        v-if="isEditing"
        type="button"
        class="btn btn-secondary ms-2"
        @click="cancelEdit"
      >
        Hủy
      </button>
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
            <td>{{ blog.userName }}</td>
            <td>{{ blog.date }}</td>
            <td>
              <button @click="editBlog(blog)" class="btn btn-warning btn-sm">
                Sửa
              </button>
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
      {{ isEditing ? "Cập nhật thành công!" : "Blog đã được thêm thành công!" }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBlogStore } from "../stores/blog";

const blogForm = ref({
  id: null,
  title: "",
  imageUrl: "",
  content: "",
  userName: "",
  date: "",
});

const isEditing = ref(false);
const showSuccessMessage = ref(false);

const store = useBlogStore();

const email = localStorage.getItem("email");
const name = localStorage.getItem("name");

const isAdmin = email === "admin@gmail.com";

const blogs = computed(() => {
  return isAdmin ? store.blogs : store.getUserBlogs(name);
});

const handleSubmit = () => {
  if (!email) {
    alert("Bạn cần đăng nhập để thực hiện thao tác này!");
    return;
  }

  if (isEditing.value) {
    // Chỉnh sửa blog
    store.updateBlog(blogForm.value);
    showSuccessMessage.value = true;
  } else {
    // Thêm blog
    blogForm.value.userName = name;
    blogForm.value.date = new Date().toLocaleString();
    store.addBlog(blogForm.value);
    showSuccessMessage.value = true;
  }

  resetForm();
};

const editBlog = (blog) => {
  if (isAdmin || blog.userName === name) {
    isEditing.value = true;
    blogForm.value = { ...blog }; // Copy dữ liệu blog để chỉnh sửa
  } else {
    alert("Bạn không có quyền chỉnh sửa bài viết này!");
  }
};

const cancelEdit = () => {
  resetForm();
};

const resetForm = () => {
  isEditing.value = false;
  blogForm.value = {
    id: null,
    title: "",
    imageUrl: "",
    content: "",
    userName: "",
    date: "",
  };
  showSuccessMessage.value = false;
};

const deleteBlog = (id) => {
  const blog = store.blogs.find((b) => b.id === id);

  if (isAdmin || (blog && blog.userName === name)) {
    store.deleteBlog(id);
  } else {
    alert("Bạn không có quyền xóa bài viết này!");
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
}
.container {
  margin-top: 190px !important;
}
h1,
h3,
label {
  color: white;
}
</style>
