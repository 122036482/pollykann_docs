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
      { text: "问题", link: "/qa" },
      { text: "指南", link: "/guard" },
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
            {
              text: "百度网盘视频如何用小鹦看看打开-苹果版",
              link: "/guard/open-baidu",
            },
            {
              text: "苹果版手机迅雷如何导入视频和字幕到小鹦看看",
              link: "/guard/import-video-and-sub-xunlei",
            },
            {
              text: "如何从电脑用USB数据线传输文件到iPhone/iPad(Mac和Windows)",
              link: "/guard/import-video-usb-pc",
            },
            {
              text: "百度网盘App视频和字幕如何导入小鹦看看-安卓版",
              link: "/guard/import-sub-baidu",
            },
            {
              text: "安卓版小鹦看看如何通过BT种子或者磁力链接下载视频？",
              link: "/guard/import-bt-android",
            },
            {
              text: "安卓版手机迅雷如何导入视频和字幕到小鹦看看",
              link: "/guard/import-xunlei-android",
            },
            {
              text: "电脑端视频和字幕如何传输到小鹦看看-安卓版",
              link: "/guard/import-sub-video-android",
            },
          ],
        },
      ],
      "/qa/": [
        {
          text: "问题合集",
          items: [
            { text: "一个账号可以登录多个设备吗？", link: "/qa/open-methods" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/122036482/pollykann_docs" },
    ],
  },
});
