<template>
  <div class="container mt-5">
    <h1 class="mb-4">Quản Lý Bình Luận</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Bình luận</th>
          <th scope="col">Bài viết</th>
          <th scope="col">Tên</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td>{{ comment.text }}</td>
          <td>{{ getBlogTitle(comment.blogId) }}</td>
          <td>{{ comment.name }}</td>
          <td>
            <button @click="deleteComment(comment.id)" class="btn btn-danger">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const comments = ref([]);

// Lấy tất cả bình luận từ localStorage
const allComments = computed(() => {
  const allComments = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("comments-")) {
      const comments = JSON.parse(localStorage.getItem(key));
      if (comments) {
        allComments.push(...comments);
      }
    }
  }
  return allComments;
});

// Lấy tiêu đề bài viết từ localStorage dựa trên blogId
const getBlogTitle = (blogId) => {
  const blog = JSON.parse(localStorage.getItem(`blog-${blogId}`));
  return blog ? blog.title : "Bài viết không tồn tại";
};

// Xóa bình luận dựa trên commentId
const deleteComment = (commentId) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("comments-")) {
      const comments = JSON.parse(localStorage.getItem(key));
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      localStorage.setItem(key, JSON.stringify(updatedComments));
    }
  }

  // Cập nhật lại danh sách bình luận sau khi xóa
  comments.value = allComments.value;
};

// Khi component được mount, lấy tất cả bình luận từ localStorage
onMounted(() => {
  comments.value = allComments.value;
});
</script>

<style scoped>
.container {
  margin-top: 200px !important;
}
.table {
  width: 100%;
}

th,
td {
  text-align: center;
}

button {
  width: 100px;
}

h1 {
  color: white;
}
</style>
