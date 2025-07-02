<template>
    <div class="link-card" @click="open = true">
        <div class="link-card-content">
            <h3 class="link-card-title">{{ title }}</h3>
            <span class="link-card-icon">{{ icon }}</span>
        </div>
    </div>
    <a-modal v-model:open="open" title="特别声明：" @ok="handleOk" :cancelText="'我不看了'" :okText="'继续查看'">
        <p>所有网站都是第三方网站，我们只是做推荐，小鹦看看不对网站的行为负任何责任。是否继续查看？</p>
    </a-modal>
</template>

<script setup>
import { ref } from 'vue';
import { Modal as AModal } from 'ant-design-vue';
import { useRouter } from 'vitepress';

const router = useRouter()
defineProps({
    title: {
        type: String,
        default: 'Card Title'
    },
    icon: {
        type: String,
        default: '🔗'
    }
});
const open = ref(false);

function handleOk() {
    open.value = false;
    console.log(router);

    // 这里可以添加跳转逻辑
    router.go("/guard/download-path-list")
}
</script>

<style scoped>
.link-card {
    max-width: 400px;
    margin: 40px auto 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    animation: scale—up 3s ease-out infinite;
}

@keyframes scale—up {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }

}

.link-card:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.link-card-content {
    background: #f8f8fa;
    height: 60px;
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border-radius: 10px;
}

.link-card-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
}

.link-card-icon {
    font-size: 20px;
}

:root.dark .link-card {
    background: #000;

}

:root.dark .link-card-content {
    background-color: #18181c;
    color: #fff;
}
</style>