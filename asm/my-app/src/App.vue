<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <NavComponent />
    <HeaderComponent />
    <BackgroundComponent />

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

import BackgroundComponent from "./components/BackgroundComponent.vue";

import CardComponent from "./components/CardComponent.vue";
import MiniCardComponent from "./components/miniCardComponent.vue";
import Detail from "./views/Detail.vue";

export default {
  components: {
    NavComponent,
    HeaderComponent,
    BackgroundComponent,

    CardComponent,
    MiniCardComponent,
    Detail,
  },
};
</script>

<style></style>
