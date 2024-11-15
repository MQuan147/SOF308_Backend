<template>
  <div id="app">
    <HeaderComponent />
    <BackgroundComponent />
    <NavComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

import BackgroundComponent from "./components/BackgroundComponent.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  components: {
    HeaderComponent,
    BackgroundComponent,
    NavComponent,
  },
};
</script>

<style>
/* Các style chung */
</style>
