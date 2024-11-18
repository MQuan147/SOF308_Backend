<template>
  <div class="modal-content">
    <div class="modal-header">
      <button class="btn-close" type="button" @click="$emit('close')"></button>
    </div>
    <div class="modal-body">
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#login"
              >Đăng Nhập</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#register"
              >Đăng Kí</a
            >
          </li>
        </ul>

        <div class="tab-content">
          <!-- Form Đăng Nhập -->
          <div class="tab-pane fade show active" id="login">
            <h3>Form Đăng Nhập</h3>
            <form class="border px-3 py-4 rounded">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Mật Khẩu</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">Đăng Nhập</button>
            </form>
          </div>

          <!-- Form Đăng Kí -->
          <div class="tab-pane fade" id="register">
            <h3>Form Đăng Kí</h3>
            <form class="border px-3 py-4 rounded">
              <div class="mb-3">
                <label for="fullName" class="form-label">Họ và Tên</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Họ và tên"
                />
              </div>
              <div class="mb-3">
                <label for="registerEmail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="registerEmail"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <label for="phoneNumber" class="form-label"
                  >Số Điện Thoại</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="phoneNumber"
                  inputmode="numeric"
                  placeholder="Số Điện Thoại"
                />
              </div>
              <div class="mb-3">
                <label for="registerPassword" class="form-label"
                  >Mật Khẩu</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="registerPassword"
                  placeholder="Mật Khẩu"
                />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label"
                  >Xác Nhận Mật Khẩu</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Xác Nhận Mật Khẩu"
                />
              </div>
              <div class="form-check-inline">Giới tính:</div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="genderMale"
                />
                <label class="form-check-label" for="genderMale">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="genderFemale"
                  checked
                />
                <label class="form-check-label" for="genderFemale">Nữ</label>
              </div>
              <div class="mt-3">
                <label for="language" class="form-label">Ngôn ngữ:</label>
                <select
                  class="form-select"
                  id="language"
                  aria-label="Default select example"
                >
                  <option selected>Tiếng Việt</option>
                  <option value="1">Tiếng Anh</option>
                  <option value="2">Tiếng Pháp</option>
                </select>
              </div>
              <div class="mt-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="termsCheck"
                />
                <label class="form-check-label" for="termsCheck">
                  Tôi đồng ý với các điều khoản và điều kiện
                </label>
              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-primary">Đăng Kí</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginFormComponent",
};
</script>

<style scoped>
.modal-content {
  margin-top: 80px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2000;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 500px;
}
.nav-tabs .nav-link {
  color: #000;
}
.nav-tabs .nav-link.active {
  font-weight: bold;
  color: #007bff;
}
/*  */
</style>
