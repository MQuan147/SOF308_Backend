<template>
  <div class="container mt-5 profile-page">
    <!-- Phần thông tin hồ sơ -->
    <div class="profile-header d-flex align-items-center">
      <img class="profile-pic" :src="profile.picture" alt="Profile Picture" />
      <div class="profile-info ms-4">
        <h3 class="profile-name">{{ profile.name }}</h3>
        <div class="stats d-flex">
          <div class="me-4">
            <strong>{{ posts.length }}</strong> bài đăng
          </div>
          <div class="me-4">
            <strong>{{ profile.followers }}</strong> người theo dõi
          </div>
          <div>
            <strong>{{ profile.following }}</strong> đang theo dõi
          </div>
        </div>
        <button class="btn btn-outline-primary mt-2" @click="updateProfile">
          Chỉnh sửa hồ sơ
        </button>
      </div>
    </div>

    <!-- Grid các bài đăng -->
    <div class="posts-grid mt-4">
      <div
        class="post-thumbnail"
        v-for="post in posts"
        :key="post.id"
        :style="{ backgroundImage: `url(${post.image})` }"
      ></div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: auto;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 1.5rem;
  margin: 0;
}

.stats {
  font-size: 1rem;
  color: #555;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.post-thumbnail {
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

.post-thumbnail:hover {
  transform: scale(1.05);
}
</style>
