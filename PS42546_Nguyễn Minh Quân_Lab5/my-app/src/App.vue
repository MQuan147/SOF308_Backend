<template>
  <div id="app">
    <NavComponent />
    <!-- <Bai1 /> -->
    <!-- <Bai2 /> -->
    <!-- <Bai3 /> -->
    <!-- <Bai4 /> -->
    <div class="content">
      <RouterView />
    </div>
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
  text-decoration: none !important;
}
</style>
