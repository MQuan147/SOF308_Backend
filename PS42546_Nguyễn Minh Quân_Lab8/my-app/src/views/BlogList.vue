<template>
  <div class="container mt-5">
    <h1 class="mb-4">Blog List</h1>
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
          :to="{ name: 'BlogPost', params: { id: blog.id, blogData: blog } }"
          class="fw-bold"
        >
          {{ blog.title }}
        </router-link>
        <div class="mt-2">
          <button class="btn btn-outline-primary me-2">Like</button>
          <button class="btn btn-outline-success">Share</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Báo đời",
          imageUrl:
            "https://brandcom.vn/wp-content/uploads/2015/05/logo-bao-daoi-song-va-phap-luat.png",
        },
        {
          id: 2,
          title: "Báo đốm",
          imageUrl:
            "https://tse3.mm.bing.net/th?id=OIP.FdHMUzOmkP6efnUM2LapoAHaE7&pid=Api&P=0&h=180",
        },
      ],
    };
  },
  methods: {
    viewBlog(id) {
      this.$router.push({ name: "BlogPost", params: { id } });
    },
  },
};
</script>

<style scope>
img {
  height: 250px;
  width: 500px;
  object-fit: cover;
  display: block;
}
</style>
