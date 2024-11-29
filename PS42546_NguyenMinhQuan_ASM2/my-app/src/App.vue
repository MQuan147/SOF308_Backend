<script setup>
import NavViews from "./views/NavViews.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

import BackgroundComponent from "./components/BackgroundComponent.vue";
</script>

<template>
  <BackgroundComponent />
  <div>
    <HeaderComponent />
    <NavViews />
  </div>
  <RouterView />
</template>
