<template>
  <div id="bai4">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CreatePost from "./CreatePost.vue";
import PostList from "./PostList.vue";

const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<style>
#bai4 {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
