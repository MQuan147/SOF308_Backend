<template>
  <div class="home-container text-center">
    <!-- Lời chào -->
    <div v-if="showGreeting" class="alert white greeting">
      Chào mừng {{ username }}
      <h1 class="white">Chào mừng đến với Technology Blog</h1>
    </div>

    <!-- Slider bài viết -->
    <div class="blog-slider mt-5">
      <div class="slider-container position-relative">
        <div
          v-for="(blog, index) in sliderBlogs"
          :key="blog.id"
          class="slider-item"
          :class="{ active: index === currentSlide }"
        >
          <!-- Sử dụng router-link -->
          <router-link
            :to="{ name: 'BlogPost', params: { id: blog.id } }"
            class="slider-link"
          >
            <div
              class="slider-image"
              :style="{ backgroundImage: `url(${blog.imageUrl})` }"
            >
              <div class="slider-content p-4">
                <h3 class="blog-title text-white">{{ blog.title }}</h3>
                <p class="blog-excerpt text-white">
                  {{ blog.excerpt || blog.content.substring(0, 150) }}...
                </p>
                <small class="text-white">
                  BY {{ blog.author || "Unknown" }}
                </small>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Nội dung khác của trang Home -->

    <!-- Bài viết đề xuất -->
    <div class="recommended-blogs">
      <h2 class="mt-5 white">Bài viết đề xuất</h2>
      <div class="container mt-4">
        <div class="row">
          <div
            v-for="blog in recommendedBlogs"
            :key="blog.id"
            class="col-md-6 col-lg-4 mb-4"
          >
            <!-- Card hiển thị bài viết -->
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useBlogStore } from "../stores/blog";

const username = ref("");
const showGreeting = ref(true);

// Lấy blogs từ store
const store = useBlogStore();
const blogs = computed(() => store.blogs);

// Blogs cho slider
const sliderBlogs = computed(() => blogs.value.slice(0, 6));
const currentSlide = ref(0);

// Tự động thay đổi slide mỗi 3 giây
onMounted(() => {
  username.value = localStorage.getItem("name") || "User";

  setTimeout(() => {
    showGreeting.value = false;
  }, 3000);

  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % sliderBlogs.value.length;
  }, 3000);
});

// Bài viết đề xuất
const recommendedBlogs = computed(() => blogs.value.slice(0, 3));
</script>

<style scoped>
.home-container {
  margin-top: 140px;
}

.greeting {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.card {
  height: 100%;
}

/* Slider styles */
.blog-slider {
  margin-bottom: 50px;
}

.slider-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.slider-item {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 1s ease-in-out;
}

.slider-item.active {
  left: 0;
  opacity: 1;
}

.slider-link {
  text-decoration: none;
  color: inherit;
}

.slider-image {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.slider-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.blog-title {
  font-size: 1.8rem;
  font-weight: bold;
}

.blog-excerpt {
  font-size: 1rem;
  margin-top: 10px;
}

.white {
  color: white;
}
</style>
