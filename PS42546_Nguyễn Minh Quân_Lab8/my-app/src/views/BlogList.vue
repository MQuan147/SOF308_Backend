<template>
  <div class="container mt-5">
    <h1 class="mb-4">Blog List</h1>
    <router-link to="/admin" class="btn btn-primary mb-4"
      >Thêm Blog</router-link
    >
    <ul class="list-group">
      <li v-for="blog in blogs" :key="blog.id" class="list-group-item">
        <div class="post-img mb-2">
          <img
            :src="blog.imageUrl"
            alt="Blog Image"
            class="img-fluid rounded"
          />
        </div>
        <router-link
          :to="{ name: 'BlogPost', params: { id: blog.id } }"
          class="fw-bold"
        >
          {{ blog.title }}
        </router-link>
        <div class="mt-2">
          <button class="btn btn-primary">Like</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useBlogStore } from "../stores/blog";

export default {
  computed: {
    blogs() {
      const store = useBlogStore();
      return store.blogs;
    },
  },
};
</script>

<style scoped>
img {
  height: 250px;
  width: 500px;
  object-fit: cover;
  display: block;
}
.fw-bold {
  text-decoration: none;
  color: black;
}
</style>
