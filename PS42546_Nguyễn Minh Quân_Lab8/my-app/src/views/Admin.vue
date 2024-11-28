<template>
  <div class="container mt-5">
    <h1 class="mb-4">Admin - Thêm Blog</h1>
    <form @submit.prevent="addBlog">
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề</label>
        <input
          v-model="blog.title"
          type="text"
          class="form-control"
          id="title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">URL Hình ảnh</label>
        <input
          v-model="blog.imageUrl"
          type="text"
          class="form-control"
          id="imageUrl"
          placeholder="Nhập URL hình ảnh"
          required
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Nội dung chi tiết</label>
        <textarea
          v-model="blog.content"
          class="form-control"
          id="content"
          rows="5"
          placeholder="Nhập nội dung chi tiết của blog"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Thêm Blog</button>
    </form>
  </div>
</template>

<script>
import { useBlogStore } from "../stores/blog.js";

export default {
  data() {
    return {
      blog: {
        title: "",
        imageUrl: "",
        content: "",
      },
    };
  },
  methods: {
    addBlog() {
      if (!this.blog.title || !this.blog.imageUrl || !this.blog.content) {
        alert("Vui lòng nhập đầy đủ tiêu đề, URL hình ảnh và nội dung!");
        return;
      }

      const store = useBlogStore();
      store.addBlog(this.blog);
      this.blog = { title: "", imageUrl: "", content: "" };
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

button[type="submit"] {
  width: 100%;
}

.form-control {
  margin-bottom: 10px;
}
</style>
