<template>
  <div
    id="autoCarousel"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/images/miniCard3.png"
          class="d-block w-100"
          alt="Slide 1"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Tiêu đề bản tin</h5>
          <p>chi tiết bản tin</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/miniCard2.png"
          class="d-block w-100"
          alt="Slide 2"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Tiêu đề bản tin</h5>
          <p>chi tiết bản tin</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/miniCard1.png"
          class="d-block w-100"
          alt="Slide 3"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Tiêu đề bản tin</h5>
          <p>chi tiết bản tin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  display: none;
}

.carousel-inner {
  overflow: hidden;
}

.carousel-item {
  transition: transform 1s ease;
}

.carousel-item-next,
.carousel-item-prev {
  transform: translateX(100%);
}

.carousel-item.active {
  transform: translateX(0);
}
</style>
