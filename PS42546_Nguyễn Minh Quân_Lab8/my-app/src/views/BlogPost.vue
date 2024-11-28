<template>
  <div class="container mt-5">
    <h1 class="mb-4">{{ blog.title }}</h1>
    <img :src="blog.imageUrl" alt="Blog Image" class="img-fluid rounded" />
    <div class="mt-4">
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
import { useBlogStore } from "../stores/blog";

export default {
  props: ["id"],
  computed: {
    blog() {
      const store = useBlogStore();
      return store.blogs.find((blog) => blog.id === parseInt(this.id));
    },
  },
};
</script>
