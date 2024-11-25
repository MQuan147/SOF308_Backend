<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstMessage = "Thông điệp ban đầu";
const secondMessage = "Thông điệp đã được thay đổi";

const message = ref(firstMessage);
const updateMessage = () => {
  message.value = message.value === firstMessage ? secondMessage : firstMessage;
};
</script>

<style></style>
