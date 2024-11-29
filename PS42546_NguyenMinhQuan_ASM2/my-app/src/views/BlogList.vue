<template>
  <div class="container mt-5">
    <div class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-md-6 col-lg-4 mb-4">
        <!-- Card hiển thị mới -->
        <div class="card rounded-card position-relative shadow-sm">
          <img
            :src="blog.imageUrl"
            class="card-img-top"
            alt="Blog Image"
            style="height: 200px; object-fit: cover"
          />
          <div class="text-overlay p-3">
            <span class="badge badge-custom">Technology</span>
            <h5 class="card-title hover-text-danger">
              <router-link
                :to="{ name: 'BlogPost', params: { id: blog.id } }"
                class="text-dark fw-bold text-decoration-none"
              >
                {{ blog.title }}
              </router-link>
            </h5>
            <p class="card-text hover-text-danger">
              {{ blog.excerpt || blog.content.substring(0, 150) }}...
            </p>
            <small>
              BY {{ blog.author || "Unknown" }} &bullet; {{ blog.date }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBlogStore } from "../stores/blog";

// Lấy store
const store = useBlogStore();

// Lấy danh sách blogs từ store
const blogs = computed(() => store.blogs);
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.card-img-top {
  transition: transform 0.3s ease-in-out;
  border-radius: 10px 10px 0 0;
}

.card-img-top:hover {
  transform: scale(1.1);
}

.text-overlay {
  position: relative;
  background: white;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

.card-title {
  font-size: 1.2rem;
  margin-top: 10px;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
}

.badge-custom {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.hover-text-danger:hover {
  color: #dc3545;
}
.container {
  margin-top: 160px !important;
}
</style>
