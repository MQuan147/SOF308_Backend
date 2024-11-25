<template>
  <div class="app">
    <!-- <Bai1 /> -->
    <!-- <Bai2 /> -->
    <!-- <Bai3 /> -->
    <!-- <Bai4 /> -->
    <NavComponent />
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup>
// import Bai1 from "./components/Bai1.vue";
// import Bai2 from "./components/Bai2.vue";
// import Bai3 from "./components/Bai3.vue";
// import Bai4 from "./components/Bai4.vue";
import NavComponent from "./components/NavComponent.vue";
</script>

<style scope>
#app a {
  text-decoration: none;
}
</style>
