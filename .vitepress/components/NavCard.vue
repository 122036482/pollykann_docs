<template>
    <div class="link-card" @click="goTo(link)">
        <div class="link-card-content">
            <div class="link-card-logo-box">
                <img :src="icon" alt="logo" class="link-card-logo">
            </div>
            <div class="link-card-title-box">
                <h3 class="link-card-title">{{ title }}</h3>
                <div class="link-card-icon-box">
                    <span class="link-card-icon">立即查看🔗 </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vitepress';

const router = useRouter()
defineProps({
    icon: {
        type: String,
        default: 'https://picx.zhimg.com/v2-9f79de3c4b132f7243475f6ecee18175.jpeg?source=7e7ef6e2&needBackground=1'
    },
    title: {
        type: String,
        default: 'Card Title'
    },
    link: {
        type: String,
        default: ''
    }
});

function goTo(link) {
    router.go(link)
}
</script>

<style scoped>
.link-card {
    max-width: 400px;
    margin: 40px auto 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 2px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
}


.link-card:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.link-card-content {
    background: #f8f8fa;
    /* height: 60px; */
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 8px;
    border-radius: 10px;
}

.link-card-logo-box {
    width: 80px;
    height: 80px;
}

.link-card-logo {
    width: 100%;
    height: 100%;
}

.link-card-title-box {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2px;
}

.link-card-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
}

.link-card-icon-box {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.link-card-icon {
    padding: 4px 6px;
    border-radius: 4px;
    background-color: #3b82f6;
    color: #fff;
    font-size: 12px;
}

:root.dark .link-card {
    background: #000;
    border: 1px solid #232334;

}

:root.dark .link-card-content {
    background-color: #18181c;
    color: #fff;
}
</style>