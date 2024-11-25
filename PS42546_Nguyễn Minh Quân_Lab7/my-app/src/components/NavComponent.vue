<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"
              ><a class="nav-link active" aria-current="page" href="#"
                >Home</a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/bai1"
              ><a class="nav-link" href="#">Bai1</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/bai2"
              ><a class="nav-link" href="#">Bai2</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/bai3"
              ><a class="nav-link" href="#">Bai3</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/bai4"
              ><a class="nav-link" href="#">Bai4</a></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scope></style>
