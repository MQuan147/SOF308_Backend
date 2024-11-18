<template>
  <div class="container my-5">
    <div class="row g-3">
      <!-- Main Card -->
      <div class="col-lg-8" v-if="mainArticle">
        <div class="card rounded-card position-relative">
          <router-link :to="`/detail/${mainArticle.id}`">
            <img
              src="../assets/images/cpu.png"
              class="card-img-top"
              :alt="mainArticle.title"
            />
          </router-link>
          <div class="text-overlay">
            <span class="badge badge-custom">{{
              mainArticle.category || "General"
            }}</span>
            <h5 class="card-title hover-text-danger">
              <router-link :to="`/detail/${mainArticle.id}`">
                {{ mainArticle.title }}
              </router-link>
            </h5>
            <p class="card-text hover-text-danger">
              {{ mainArticle.content }}
            </p>
            <small
              >BY {{ mainArticle.author }} &bullet;
              {{ mainArticle.date }}</small
            >
          </div>
        </div>
      </div>

      <!-- Side Cards -->
      <div class="col-lg-4">
        <!-- Card 1 -->
        <div class="card rounded-card position-relative mb-3">
          <img
            src="../assets/images/cpu1.png"
            class="card-img-top"
            alt="Article 1"
          />
          <div class="text-overlay">
            <span class="badge badge-custom">Technology</span>
            <h6 class="card-title">
              Trên tay ROG Harpe Ace Mini chuột hiệu năng cao dành cho người
              dùng tay nhỏ
            </h6>
            <small>BY Tao Viết &bullet; January 11, 2024</small>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="card rounded-card position-relative">
          <img
            src="../assets/images/pc.png"
            class="card-img-top"
            alt="Article 2"
          />
          <div class="text-overlay">
            <span class="badge badge-custom">Technology</span>
            <a
              href=""
              class="text-white text-decoration-none hover:text-primary"
              ><h6 class="card-title">
                Trên tay TP-Link Archer Air R5 - mỏng, gọn, và bạn sẽ không nghĩ
                nó là 1 chiếc router wifi
              </h6></a
            >
            <small>BY Tao Viết &bullet; January 11, 2024</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {
      articles: [],
      mainArticle: null,
      sideArticles: [],
      imageBaseUrl: "../assets/images/",
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await fetch("http://localhost:3000/articles");
        const data = await response.json();
        this.articles = data;

        this.mainArticle = this.articles[0];
        this.sideArticles = this.articles.slice(1);

        this.articles.forEach((article) => {
          article.fullImageUrl = this.imageBaseUrl + article.image;
        });
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    },
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
  overflow: hidden;
}
.badge-custom {
  background-color: #ff4081;
}
.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
}
.card {
  top: 120px;
  z-index: 10;
}

section {
  z-index: 1;
}

.card-title a {
  color: white;
  text-decoration: none;
}
.card-img-top {
  transition: transform 0.3s ease-in-out;
}

.card-img-top:hover {
  transform: scale(1.1);
}
/*  */
.text-overlay {
  background-color: rgba(2, 2, 2, 0.8);
}
</style>
