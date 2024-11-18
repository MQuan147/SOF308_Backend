<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <CardComponent />
    <miniCardComponent />
  </div>
</template>

<script>
import NavComponent from "../components/NavComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

import BackgroundComponent from "../components/BackgroundComponent.vue";

import CardComponent from "../components/CardComponent.vue";
import MiniCardComponent from "../components/miniCardComponent.vue";

export default {
  components: {
    NavComponent,
    HeaderComponent,
    BackgroundComponent,

    CardComponent,
    MiniCardComponent,
  },
};
</script>

<style></style>
