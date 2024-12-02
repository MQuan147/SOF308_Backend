<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Nội dung chính của bài viết -->
      <div class="col-md-8 blog-content">
        <h1 class="blog-title mb-4">
          {{ blog?.title || "Bài viết không tồn tại" }}
        </h1>
        <img
          v-if="blog?.imageUrl"
          :src="blog.imageUrl"
          alt="Blog Image"
          class="img-fluid rounded blog-image"
        />
        <div v-if="blog?.content" class="mt-4 blog-body">
          <p>{{ blog.content }}</p>
        </div>
        <div class="blog-footer mt-5" v-if="blog">
          <div class="author-info d-flex justify-content-end">
            <div class="text-end">
              <strong class="author-name"
                >By {{ blog.author || "Unknown Author" }}</strong
              >
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
      <h5>Bình luận về bài viết: {{ blog?.title }}</h5>
      <div v-for="comment in comments" :key="comment.id" class="comment mb-3">
        <p class="den">
          <strong class="den">{{ comment.name }}:</strong> {{ comment.text }}
        </p>
      </div>
      <div v-if="isLoggedIn" class="mt-4">
        <textarea
          v-model="newComment"
          placeholder="Viết bình luận..."
          class="form-control"
          rows="3"
          @keyup.enter="submitComment"
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
import { ref, computed, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useBlogStore } from "../stores/blog";

// Lấy `id` từ route params
const route = useRoute();
const id = ref(route.params.id);

const newComment = ref("");
const isLoggedIn = ref(!!localStorage.getItem("email")); // Kiểm tra người dùng đã đăng nhập

// Store blogs
const store = useBlogStore();

// Khởi tạo dữ liệu blog và các bài viết liên quan
const blog = ref(null);
const relatedBlogs = ref([]);
const comments = ref([]);

// Hàm cập nhật dữ liệu blog và liên quan
const fetchBlogData = (blogId) => {
  const blogIdInt = parseInt(blogId);
  blog.value = store.blogs.find((blog) => blog.id === blogIdInt) || null;
  relatedBlogs.value = store.blogs
    .filter((relatedBlog) => relatedBlog.id !== blogIdInt)
    .slice(0, 5);

  // Lấy danh sách bình luận từ localStorage
  comments.value =
    JSON.parse(localStorage.getItem(`comments-${blogIdInt}`)) || [];
};

// Khởi tạo dữ liệu ban đầu
fetchBlogData(id.value);

// Cập nhật khi route thay đổi
onBeforeRouteUpdate((to) => {
  fetchBlogData(to.params.id);
});

// Thêm bình luận
const submitComment = () => {
  if (newComment.value.trim() === "") return;

  const blogIdInt = parseInt(id.value);

  const comment = {
    id: Date.now(),
    blogId: blogIdInt, // Thêm thông tin blogId
    name: localStorage.getItem("name") || "Anonymous",
    text: newComment.value.trim(),
  };

  // Lưu bình luận vào localStorage
  comments.value.push(comment);
  localStorage.setItem(`comments-${blogIdInt}`, JSON.stringify(comments.value));

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
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: white;
}

/* Phần bình luận */
.comments-section {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.comments-section h5 {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.comment {
  display: flex;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.comment strong {
  color: #10caf8;
  margin-right: 10px;
  font-size: 1rem;
}

.comment p {
  margin: 0;
  color: white;
}

textarea {
  width: 100%;
  color: white;
  border: 1px solid #495057;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
}

textarea:focus {
  outline: none;
  border-color: #10caf8;
  box-shadow: 0 0 5px #10caf8;
}

button {
  width: 100%;
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #10caf8;
  color: white;
}

.den {
  color: white !important;
  text-decoration: none;
}

.den a {
  color: white !important;
  font-weight: bold;
}

.den a:hover {
  color: #10caf8 !important;
}
</style>
