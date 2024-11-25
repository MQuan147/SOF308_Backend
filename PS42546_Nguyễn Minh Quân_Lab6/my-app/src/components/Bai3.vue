<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" class="img-fluid" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="col-sm-4">
        <div class="card h-100">
          <img :src="items[1].image" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title">{{ items[1].title }}</h3>
            <p class="card-text">{{ items[1].content }}</p>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card h-100">
          <img :src="items[2].image" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title">{{ items[2].title }}</h3>
            <p class="card-text">{{ items[2].content }}</p>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <!-- 
    -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Chi tiết nè</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Chi tiết nè</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const items = [
  {
    title: "8 loại rau củ quả giàu canxi",
    content: "Canxi là...",
    image: img1,
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content: "Một số loại...",
    image: img2,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content: "Đậu lăng...",
    image: img3,
  },
];
</script>

<style scoped>
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
