<template>
  <div class="container">
    <h2>Nhập điểm trung bình</h2>
    <input type="number" v-model.number="score" />
    <p v-if="score < 1 || score > 10" style="color: red">
      Nhập điểm từ 1 đến 10
    </p>
    <p v-else-if="score > 1 && score < 5">Loại yếu</p>
    <p v-else-if="score >= 5 && score < 6.5">Loại trung bình</p>
    <p v-else-if="score >= 6.5 && score < 8">Loại khá</p>
    <p v-else-if="score >= 8 && score < 9">Loại giỏi</p>
    <p v-else>Loại xuất sắc</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const score = ref("1");
</script>

<style></style>
