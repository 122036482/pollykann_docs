import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  title: "小鹦看看",
  description: "小鹦看看官方操作指南",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      { type: "text/javascript", async: true },
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?e265f77909812f94845446a21dbd86a8";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
`,
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "「小鸚看看」— AI英语视频学习助手，智能字幕+生词分析+变速播放，通过电影/美剧/TED高效提升听力、口语、词汇。立即体验！",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "英语学习APP,视频学英语,智能英语学习,听力训练,口语练习,词汇记忆,电影学英语,美剧学英语,TED学习,YouTube学英语,AI字幕,变速播放,生词本,英语学习工具,小鸚看看",
      },
    ],
    [
      "meta",
      { property: "og:title", content: "小鸚看看 - 智能英语视频学习助手" },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "用AI技术通过电影/美剧/TED视频高效学习英语，智能字幕+生词分析+变速播放，提升听力口语词汇能力",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://www.pollykann.com" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://www.pollykann.com//pollykann.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      { name: "twitter:title", content: "小鸚看看 - 智能英语视频学习助手" },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "用刷剧的方式学英语！AI智能字幕解析+生词分析，电影/美剧/TED视频高效学习英语",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://www.pollykann.com//pollykann.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "问题", link: "/qa" },
      { text: "指南", link: "/guard" },
      { text: "功能演示", link: "/feature" },
      { text: "下载", link: "https://www.pollykann.com" },
    ],
    ignoreDeadLinks: true,
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
            {
              text: "Android手机如何投屏手机画面到电视",
              link: "/guard/fast-screen-android",
            },
          ],
        },
      ],
      "/qa/": [
        {
          text: "问题合集",
          items: [{ text: "常见问题", link: "/qa/open-methods" }],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/122036482/pollykann_docs" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Pollykann",
    },
  },
});
