import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogs: [
      {
        id: 1,
        title: "Báo đời",
        imageUrl:
          "https://brandcom.vn/wp-content/uploads/2015/05/logo-bao-daoi-song-va-phap-luat.png",
        content: "Nội dung chi tiết bài viết Báo đời.",
      },
      {
        id: 2,
        title: "Báo đốm",
        imageUrl:
          "https://tse3.mm.bing.net/th?id=OIP.FdHMUzOmkP6efnUM2LapoAHaE7&pid=Api&P=0&h=180",
        content: "Nội dung chi tiết bài viết Báo đốm.",
      },
    ],
  }),
  actions: {
    addBlog(blog) {
      const newBlog = { ...blog, id: this.blogs.length + 1 };
      this.blogs.push(newBlog);
    },
  },
});
