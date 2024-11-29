<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Nội dung chính của bài viết -->
      <div class="col-md-8 blog-content">
        <h1 class="blog-title mb-4">{{ blog.title }}</h1>
        <img
          :src="blog.imageUrl"
          alt="Blog Image"
          class="img-fluid rounded blog-image"
        />
        <div class="mt-4 blog-body">
          <p>{{ blog.content }}</p>
        </div>
        <div class="blog-footer mt-5">
          <div class="author-info d-flex justify-content-end">
            <div class="text-end">
              <strong class="author-name">{{
                blog.author || "Unknown Author"
              }}</strong>
              <p class="text-muted mb-0">{{ blog.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Danh sách bài viết đề xuất -->
      <div class="col-md-4 suggested-blogs">
        <h4 class="mb-3">Bài viết đề xuất</h4>
        <div
          v-for="relatedBlog in relatedBlogs"
          :key="relatedBlog.id"
          class="card mb-4 shadow-sm"
        >
          <img
            :src="relatedBlog.imageUrl"
            class="card-img-top"
            alt="Related Blog"
            style="height: 150px; object-fit: cover"
          />
          <div class="card-body">
            <h6 class="card-title">
              <router-link
                :to="{ name: 'BlogPost', params: { id: relatedBlog.id } }"
                class="text-dark text-decoration-none"
              >
                {{ relatedBlog.title }}
              </router-link>
            </h6>
            <p class="card-text text-muted small">
              By {{ relatedBlog.author || "Unknown Author" }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Phần bình luận -->
    <div class="comments-section mt-5">
      <h5>Bình luận về bài viết: {{ blog.title }}</h5>
      <!-- Hiển thị tiêu đề bài viết -->
      <div v-for="comment in comments" :key="comment.id" class="comment mb-3">
        <p class="den">
          <strong class="den">{{ comment.name }}:</strong>{{ comment.text }}
        </p>
      </div>
      <div v-if="isLoggedIn" class="mt-4">
        <textarea
          v-model="newComment"
          placeholder="Viết bình luận..."
          class="form-control"
          rows="3"
        ></textarea>
        <button @click="submitComment" class="btn btn-primary mt-2">
          Đăng Bình Luận
        </button>
      </div>
      <div v-else class="mt-4">
        <p class="den">
          Vui lòng
          <router-link style="text-decoration: none" to="/login"
            >đăng nhập</router-link
          >
          để bình luận.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBlogStore } from "../stores/blog";
import { useRoute } from "vue-router";

// Lấy `id` từ props
const route = useRoute();
const id = route.params.id;

// Trạng thái
const newComment = ref("");
const isLoggedIn = ref(!!localStorage.getItem("email")); // Kiểm tra người dùng đã đăng nhập

// Store blogs
const store = useBlogStore();

// Lấy blog hiện tại
const blog = computed(() =>
  store.blogs.find((blog) => blog.id === parseInt(id))
);

// Lấy các blog liên quan
const relatedBlogs = computed(() =>
  store.blogs.filter((blog) => blog.id !== parseInt(id))
);

// Lấy danh sách bình luận
const comments = computed(() => {
  return JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
});

// Thêm bình luận
const submitComment = () => {
  if (newComment.value.trim() === "") return;

  const comment = {
    id: Date.now(),
    name: localStorage.getItem("name") || "Anonymous", // Lấy tên người dùng từ localStorage
    text: newComment.value.trim(),
  };

  // Lưu bình luận vào localStorage
  const currentComments = comments.value;
  currentComments.push(comment);
  localStorage.setItem(`comments-${id}`, JSON.stringify(currentComments));

  // Reset input
  newComment.value = "";
};
</script>

<style scoped>
/* Tổng thể */
.container {
  font-family: "Roboto", sans-serif;
  margin-top: 190px !important;
}
h1,
p,
h4,
strong {
  color: white !important;
}
.blog-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #343a40;
}
.blog-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #495057;
}

/* Nền đen mờ cho phần nội dung chính */
.blog-content {
  position: relative;
  background-color: rgba(0, 0, 0, 0.7); /* Nền đen mờ */
  padding: 20px;
  border-radius: 10px;
  color: white; /* Màu chữ trắng để dễ đọc trên nền đen */
}

/* Phần bình luận */
.comments-section {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.comment {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
}

button {
  width: 100%;
}

.den {
  color: black !important;
  text-decoration: none;
}
</style>
