// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
// import DefaultTheme from "vitepress/theme";
import Layout from "../components/Layout.vue";
import VideoPlay from "../components/VideoPlay.vue";
import ImageCard from "../components/ImageCard.vue";
import LinkCard from "../components/LinkCard.vue";

// import "ant-design-vue/dist/antd.css";
import "./styles.css";
import "video.js/dist/video-js.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // console.log("Enhancing app with custom layout and functionality");
    // console.log(router, app);
    app.component("VideoPlay", VideoPlay);
    app.component("ImageCard", ImageCard);
    app.component("LinkCard", LinkCard);
    // ...
  },
};
