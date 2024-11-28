<template>
  <div class="container my-5">
    <br />
    <h2>User Profile</h2>
    <br />
    <form>
      <div class="mb-3">
        <label for="avatar" class="form-label">Avatar</label>
        <img
          src="../assets/images/image.png"
          alt="Avatar Preview"
          class="mt-2"
          style="
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
          "
        />
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          value="Nguyễn Minh Quân"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          value="quannguyen@gmail.com"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          value="123456"
        />
      </div>

      <!-- Bio -->
      <div class="mb-3">
        <label for="bio" class="form-label">Detail</label>
        <textarea
          class="form-control"
          id="bio"
          rows="3"
          value="Có thông tin nhưng không đáng kể"
        ></textarea>
      </div>

      <button type="button" class="btn btn-primary">Update Profile</button>
    </form>
  </div>
  <br />
  <br />
</template>

<script></script>

<style scoped>
.container {
  max-width: 1600px;
  width: 800px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
