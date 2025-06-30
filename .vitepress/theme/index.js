// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
// import DefaultTheme from "vitepress/theme";
import Layout from "../components/Layout.vue";
import "./styles.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    console.log("Enhancing app with custom layout and functionality");
    console.log(router, app);
    // ...
  },
};
