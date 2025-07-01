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
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
