import { createApp } from "vue";
import GlobalVideoPlayer from "../components/GlobalVideoPlayer.vue";

class VideoPlayerManager {
  constructor() {
    this.app = null;
    this.container = null;
    this.isVisible = false;
  }

  show(options = {}) {
    const {
      src,
      title = "视频播放",
      onClose = () => {},
      onLoaded = () => {},
      onError = () => {},
    } = options;

    if (!src) {
      console.error("视频源地址不能为空");
      return;
    }

    // 如果已经显示，先关闭
    if (this.isVisible) {
      this.hide();
    }

    // 创建容器
    this.container = document.createElement("div");
    document.body.appendChild(this.container);

    // 创建Vue应用
    this.app = createApp(GlobalVideoPlayer, {
      visible: true,
      src: src,
      title: title,
      onClose: () => {
        this.hide();
        onClose();
      },
      onLoaded: onLoaded,
      onError: onError,
    });

    // 挂载应用
    this.app.mount(this.container);
    this.isVisible = true;

    // 防止页面滚动
    document.body.style.overflow = "hidden";
  }

  hide() {
    if (this.app) {
      this.app.unmount();
      this.app = null;
    }

    if (this.container) {
      document.body.removeChild(this.container);
      this.container = null;
    }

    this.isVisible = false;
    document.body.style.overflow = "";
  }

  isShowing() {
    return this.isVisible;
  }
}

// 创建全局实例
const videoPlayer = new VideoPlayerManager();

// 导出便捷函数
export const showVideo = (options) => {
  return videoPlayer.show(options);
};

export const hideVideo = () => {
  return videoPlayer.hide();
};

export const isVideoShowing = () => {
  return videoPlayer.isShowing();
};

// 默认导出管理器实例
export default videoPlayer;
