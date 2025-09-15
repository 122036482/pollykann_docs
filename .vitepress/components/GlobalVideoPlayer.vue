<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div v-if="visible" class="video-modal" @click="close">
        <div class="video-modal__container" @click.stop>
          <!-- 关闭按钮 -->
          <button class="video-modal__close" @click="close" aria-label="关闭视频">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <!-- 视频内容 -->
          <div class="video-modal__content">
            <video ref="videoElement" class="video-player" autoplay muted controls preload="metadata" :src="src"
              @loadedmetadata="onVideoLoaded" @error="onVideoError">
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue'

// Props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: '视频播放'
  }
})

// Emits
const emit = defineEmits(['close', 'loaded', 'error'])

// Refs
const videoElement = ref(null)

// 方法
const close = () => {
  // 暂停视频
  if (videoElement.value) {
    videoElement.value.pause()
  }
  emit('close')
}

const onVideoLoaded = () => {
  console.log('视频加载完成')
  emit('loaded', {
    duration: videoElement.value?.duration,
    width: videoElement.value?.videoWidth,
    height: videoElement.value?.videoHeight
  })
}

const onVideoError = (error) => {
  console.error('视频播放错误:', error)
  emit('error', error)
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.visible) {
    close()
  }
}

// 监听显示状态
watch(() => props.visible, (visible) => {
  if (visible) {
    nextTick(() => {
      // 重新加载视频
      if (videoElement.value) {
        videoElement.value.load()
      }
    })
    document.addEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})

// 监听视频源变化
watch(() => props.src, (newSrc) => {
  if (newSrc && videoElement.value) {
    videoElement.value.src = newSrc
    videoElement.value.load()
  }
})

// 清理
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}

.video-modal__container {
  position: relative;
  background: #000;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  overflow: hidden;
}

.video-modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.video-modal__close:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

.video-modal__close svg {
  width: 24px;
  height: 24px;
}

.video-modal__content {
  width: 100%;
  height: 500px;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* 动画 */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .video-modal__container,
.modal-leave-to .video-modal__container {
  transform: scale(0.9) translateY(-20px);
}

/* 响应式 */
@media (max-width: 768px) {
  .video-modal__container {
    width: 95vw;
    margin: 20px;
  }

  .video-modal__content {
    height: 300px;
  }

  .video-modal__close {
    width: 36px;
    height: 36px;
    top: 12px;
    right: 12px;
  }

  .video-modal__close svg {
    width: 20px;
    height: 20px;
  }
}
</style>
