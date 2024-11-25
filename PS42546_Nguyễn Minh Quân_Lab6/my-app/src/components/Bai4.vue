<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="col-sm-4">
      <h3>Thêm học sinh</h3>
      <div class="mb-3 mt-3">
        <label for="name">Họ tên:</label>
        <input
          type="text"
          class="form-control"
          v-model="student.name"
          id="name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="score">Điểm:</label>
        <input
          type="number"
          class="form-control"
          v-model="student.score"
          @input="validateScore(student.score)"
          id="score"
          min="1"
          max="10"
          required
        />
      </div>

      <p v-if="scoreError" class="text-danger">{{ scoreError }}</p>

      <div class="mb-3">
        <label for="dob">Ngày sinh:</label>
        <input
          type="date"
          class="form-control"
          v-model="student.dob"
          @input="validateDob(student.dob)"
          id="dob"
          required
        />
      </div>

      <p v-if="dobError" class="text-danger">{{ dobError }}</p>

      <button class="btn btn-success" type="submit">
        {{ isEditing ? "Cập nhật" : "Thêm" }}
      </button>
    </form>

    <!-- Phần sanh sách -->
    <h3>Danh sách học sinh</h3>
    <table class="table tablehover">
      <thead>
        <tr>
          <th>Họ và tên</th>
          <th>Điểm</th>
          <th>Ngày sinh</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stu, index) in students" :key="index">
          <td>{{ stu.name }}</td>
          <td>{{ stu.score }}</td>
          <td>{{ stu.dob }}</td>
          <td>
            <button class="btn btn-warning" @click="editStudent(index)">
              Sửa
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteStudent(index)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
  { name: "Nguyễn Minh Quân", score: 8, dob: "2004-04-04" },
  { name: "Nguyễn Chí Hùng", score: 9, dob: "2006-01-01" },
]);

const student = ref({
  name: "",
  score: null,
  dob: "",
});

const scoreError = ref("");
const dobError = ref("");

function validateScore(score) {
  if (!score || score < 1 || score > 10) {
    scoreError.value = "Điểm phải nằm trong khoảng từ 1 đến 10!";
    return false;
  } else {
    scoreError.value = "";
  }
}

function validateDob(dob) {
  const birthYear = new Date(dob).getFullYear();

  if (birthYear > 2006) {
    dobError.value = "Năm sinh phải trước 2006!";
    return false;
  }

  dobError.value = "";
  return true;
}

let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
  validateScore(student.value.score);
  validateDob(student.value.dob);

  if (scoreError.value || dobError.value) return;

  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    students.value.push({ ...student.value });
  }
  resestForm();
}

function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

function deleteStudent(index) {
  students.value.splice(index, 1);
}

function resestForm() {
  student.value = {
    name: "",
    score: null,
    dob: "",
  };
}
</script>

<style scope></style>
