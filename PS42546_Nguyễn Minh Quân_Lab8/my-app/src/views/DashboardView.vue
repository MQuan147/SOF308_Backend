<template>
  <div class="container mt-5">
    <h1 class="mb-4">Quản lý Blog</h1>

    <button @click="logout" class="btn btn-danger mb-3">Đăng xuất</button>

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

<script>
import { useBlogStore } from "../stores/blog";

export default {
  data() {
    return {
      newBlog: {
        title: "",
        imageUrl: "",
        content: "",
      },
      showSuccessMessage: false,
    };
  },
  computed: {
    blogs() {
      const store = useBlogStore();
      return store.blogs;
    },
  },
  methods: {
    addBlog() {
      const store = useBlogStore();
      store.addBlog(this.newBlog);
      this.newBlog = { title: "", imageUrl: "", content: "" };
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    },

    deleteBlog(id) {
      const store = useBlogStore();
      const index = store.blogs.findIndex((blog) => blog.id === id);
      if (index !== -1) {
        store.blogs.splice(index, 1);
      }
    },

    logout() {
      localStorage.removeItem("isAuthenticated");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
