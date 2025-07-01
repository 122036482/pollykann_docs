import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  title: "小鹦看看",
  description: "小鹦看看官方操作指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "指南", link: "/guard/how-to-download-film" },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/guard/": [
        {
          text: "指南",
          items: [
            { text: "如何免费下载影视剧", link: "/guard/how-to-download-film" },
            {
              text: "导入视频和字幕的方法",
              link: "/guard/import-video-and-sub",
            },
            {
              text: "安卓下载磁力/Bt种子方法",
              link: "/guard/download-bt",
            },
            {
              text: "迅雷下载电影方法",
              link: "/guard/download-xunlei",
            },
            {
              text: "小鹦看看添加外挂字幕方法",
              link: "/guard/add-sub-pollykann",
            },
            {
              text: "小鹦看看观看Youtube视频方法",
              link: "/guard/add-youtube",
            },
            {
              text: "电脑端下载字幕方法",
              link: "/guard/download-sub-pc",
            },
            {
              text: " 用AI制作字幕 ",
              link: "https://www.33subs.com/blog/free_generate_video_subtitle",
            },
            {
              text: "小鹦看看快速投屏方法",
              link: "/guard/fast-screen",
            },
            {
              text: "如何在PC上使用小鹦看看",
              link: "/guard/use-pc",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
