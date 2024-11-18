<template>
  <div>
    <DetailComponent :id="articleId" />
  </div>
</template>

<script>
import DetailComponent from "@/components/DetailComponent.vue";

export default {
  name: "Detail",
  components: {
    DetailComponent,
  },
  data() {
    return {
      articleId: null,
    };
  },
  created() {
    // Lấy `id` từ tham số URL khi người dùng truy cập vào trang
    this.articleId = this.$route.params.id;
  },
};
</script>

<style scoped></style>
