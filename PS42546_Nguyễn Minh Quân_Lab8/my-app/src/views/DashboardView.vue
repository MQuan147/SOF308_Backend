<template>
  <div class="container mt-5">
    <h1 class="display-5">Dashboard</h1>

    <button @click="logout" class="btn btn-danger">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("isAuthenticated");

      this.$router.push({ name: "Login" });
    },
  },
};
</script>
