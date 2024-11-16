<template>
  <div class="container my-5">
    <div class="row g-3">
      <!-- Main Card -->
      <div class="col-lg-8">
        <div class="card rounded-card position-relative">
          <img
            src="../assets/images/cpu.png"
            class="card-img-top"
            alt="Main Article"
          />
          <div class="text-overlay">
            <span class="badge badge-custom">Technology</span>
            <h5 class="card-title hover-text-danger">
              Trên tay ASUS TUF Gaming VG1A phiên bản 30 inch – giải trí thì
              khỏi phải bàn
            </h5>
            <p class="card-text hover-text-danger">
              ASUS TUF Gaming VG1A mã VG30VQL1A có thiết kế màn hình dài và
              cong. Không có quá nhiều đường cắt xẻ như các sản phẩm ROG. Đi kèm
              màn hình là chiếc chân đế. Chân đế rất chắc chắn. Đặc biệt là với
              chiếc chân đế này thì bạn có thể dùng màn hình ngang hoặc dọc cực
              kì linh hoạt. Với khả năng linh hoạt này thì bạn hoàn toàn có thể
              thiết lập góc làm việc tuỳ ý.
            </p>
            <small>BY Tao Viết &bullet; January 11, 2024</small>
          </div>
        </div>
      </div>

      <!-- Side Cards -->
      <div class="col-lg-4">
        <!-- Card 1 -->
        <div class="card rounded-card position-relative mb-3">
          <img
            src="../assets/images/cpu1.png"
            class="card-img-top"
            alt="Article 1"
          />
          <div class="text-overlay">
            <span class="badge badge-custom">Technology</span>
            <h6 class="card-title">
              Trên tay ROG Harpe Ace Mini chuột hiệu năng cao dành cho người
              dùng tay nhỏ
            </h6>
            <small>BY Tao Viết &bullet; January 11, 2024</small>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="card rounded-card position-relative">
          <img
            src="../assets/images/pc.png"
            class="card-img-top"
            alt="Article 2"
          />
          <div class="text-overlay">
            <span class="badge badge-custom">Technology</span>
            <a
              href=""
              class="text-white text-decoration-none hover:text-primary"
              ><h6 class="card-title">
                Trên tay TP-Link Archer Air R5 – mỏng, gọn, và bạn sẽ không nghĩ
                nó là 1 chiếc router wifi
              </h6></a
            >
            <small>BY Tao Viết &bullet; January 11, 2024</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
  overflow: hidden;
}
.badge-custom {
  background-color: #ff4081; /* Custom color for badges */
}
.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
}
/* Trong CardComponent */
.card {
  top: 150px;
  z-index: 10; /* Tăng z-index của card để nó không bị che */
}

/* Trong BackgroundComponent */
section {
  z-index: 1; /* Đảm bảo rằng nền động luôn ở dưới các phần tử khác */
}
</style>
