import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogs: JSON.parse(localStorage.getItem("blogs")) || [], // Khởi tạo rỗng nếu không có dữ liệu
  }),

  actions: {
    // Thêm blog mới vào danh sách và cập nhật localStorage
    addBlog(blog) {
      // Bản đồ email sang tên hiển thị
      const emailToDisplayName = {
        "author1@gmail.com": "Author Minh Quân",
        "author2@gmail.com": "Author Nguyễn Quân",
        "admin@gmail.com": "Admin Quân",
      };

      // Lấy email của người đăng nhập
      const email = localStorage.getItem("email") || "Unknown";

      // Xác định tên tác giả dựa trên email
      const authorName = emailToDisplayName[email] || email; // Nếu không có trong bản đồ, dùng email làm tên

      // Thêm ID, ngày giờ, và tác giả vào blog mới
      const newBlog = {
        ...blog,
        id: this.blogs.length + 1,
        date: new Date().toLocaleString(), // Lấy ngày giờ hiện tại
        author: authorName, // Gắn tên tác giả hiển thị
      };

      this.blogs.push(newBlog); // Thêm blog mới vào danh sách
      this.updateLocalStorage(); // Cập nhật lại localStorage
    },

    // Xóa blog và cập nhật lại localStorage
    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
      this.updateLocalStorage();
    },

    // Cập nhật dữ liệu vào localStorage
    updateLocalStorage() {
      localStorage.setItem("blogs", JSON.stringify(this.blogs));
    },
  },
});
