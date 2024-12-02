import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogs: JSON.parse(localStorage.getItem("blogs")) || [], // Khởi tạo rỗng nếu không có dữ liệu
  }),

  actions: {
    addBlog(blog) {
      const userName = localStorage.getItem("name") || "Unknown";

      const displayName =
        userName === "admin@gmail.com" ? "Admin Quân" : userName;

      const newBlog = {
        ...blog,
        id: this.blogs.length + 1,
        date: new Date().toLocaleString(),
        author: displayName,
      };

      this.blogs.push(newBlog);
      this.updateLocalStorage();
    },

    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
      this.updateLocalStorage();
    },
    updateBlog(updatedBlog) {
      const index = this.blogs.findIndex((blog) => blog.id === updatedBlog.id);
      if (index !== -1) {
        this.blogs[index] = updatedBlog;
      } else {
        throw new Error("Blog không tồn tại");
      }
    },

    updateLocalStorage() {
      localStorage.setItem("blogs", JSON.stringify(this.blogs));
    },

    getUserBlogs(userName) {
      return this.blogs.filter((blog) => blog.userName === userName);
    },
  },
});
