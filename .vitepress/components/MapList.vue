<template>
    <div class="tw-map-list">
        <div class="tw-map-list-grid">
            <div v-for="item in items" :key="item.title" class="tw-map-list-item" @click="goTo(item.link)">
                <div class="tw-map-list-title">{{ item.title }}</div>
                <div class="tw-map-list-desc" v-if="item.desc">{{ item.desc }}</div>
                <button class="tw-map-list-btn">{{ item.btn }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vitepress'
import items from './maplistData.js'

const router = useRouter()
function goTo(link) {
    router.go(link)
}
</script>

<style scoped>
.tw-map-list {
    width: 100%;
    padding: 32px 0 16px 0;
}

.tw-map-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px 24px;
}

.tw-map-list-item {
    background: var(--vp-c-bg, #fff);
    border-radius: 1rem;
    padding: 1.5rem 1.25rem 1.25rem 1.25rem;
    color: var(--vp-c-text-1, #1e293b);
    display: flex;
    flex-direction: column;
    min-height: 100px;
    box-shadow: 0 2px 8px 0 rgba(30, 41, 59, 0.06);
    border: 1px solid var(--vp-c-divider, #e5e7eb);
    transition: box-shadow 0.18s, transform 0.15s, border-color 0.18s;
    cursor: pointer;
}

.tw-map-list-item:hover {
    box-shadow: 0 6px 24px 0 rgba(30, 41, 59, 0.12);
    border-color: var(--vp-c-brand-1, #3b82f6);
    transform: translateY(-2px) scale(1.02);
}

.tw-map-list-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    letter-spacing: 0.01em;
}

.tw-map-list-desc {
    font-size: 1rem;
    color: var(--vp-c-text-2, #64748b);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.tw-map-list-btn {
    align-self: flex-end;
    background: var(--vp-c-brand-1, #3b82f6);
    color: #fff;
    border: none;
    border-radius: 9999px;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.35rem 1.2rem;
    margin-top: auto;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(59, 130, 246, 0.08);
    transition: background 0.18s, color 0.18s, transform 0.15s, box-shadow 0.18s;
    outline: none;
    letter-spacing: 0.01em;
    line-height: 1.2;
}

.tw-map-list-btn:hover,
.tw-map-list-btn:focus {
    background: var(--vp-c-brand-2, #2563eb);
    color: #fff;
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 3px 12px rgba(59, 130, 246, 0.13);
}

/* 暗黑模式适配 */
:root.dark .tw-map-list-item {
    background: var(--vp-c-bg, #18181c);
    color: var(--vp-c-text-1, #e0e6f0);
    border: 1px solid var(--vp-c-divider, #232334);
}

:root.dark .tw-map-list-desc {
    color: var(--vp-c-text-2, #a5b4fc);
}

:root.dark .tw-map-list-btn {
    background: var(--vp-c-brand-1, #3b82f6);
    color: #fff;
}

:root.dark .tw-map-list-btn:hover,
:root.dark .tw-map-list-btn:focus {
    background: var(--vp-c-brand-2, #2563eb);
    color: #fff;
}
</style>