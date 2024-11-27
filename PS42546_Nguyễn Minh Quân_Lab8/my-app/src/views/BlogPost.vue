<template>
  <div class="container mt-5">
    <h1 class="display-5">Blog Post {{ id }}</h1>
    <p class="mt-3">This is the content of the blog post with ID {{ id }}.</p>
    <router-link to="/blog" class="btn btn-secondary mt-3"
      >Back to Blog List</router-link
    >
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    return { id: route.params.id };
  },
};
</script>
