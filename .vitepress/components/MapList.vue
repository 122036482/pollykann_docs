<template>
    <div class="map-list">
        <!-- B站特色卡片 - 单独展示 -->
        <a v-for="item in bilibiliItems" :key="item.title" :href="item.link" class="map-item map-item--feature"
            @click.prevent="goTo(item.link)">
            <span class="map-item__badge">B站</span>
            <div class="map-item__content">
                <span class="map-item__title">{{ item.title }}</span>
                <span class="map-item__desc" v-if="item.desc">{{ item.desc }}</span>
            </div>
            <span class="map-item__arrow">→</span>
        </a>

        <!-- 常规列表 -->
        <div class="map-list__grid">
            <a v-for="item in normalItems" :key="item.title" :href="item.link" class="map-item"
                @click.prevent="goTo(item.link)">
                <div class="map-item__content">
                    <span class="map-item__title">{{ item.title }}</span>
                    <span class="map-item__desc" v-if="item.desc">{{ item.desc }}</span>
                </div>
                <span class="map-item__arrow">→</span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vitepress'
import items from './maplistData.js'
import { computed } from 'vue'

const bilibiliItems = computed(() => items.filter(i => i.variant === 'bilibili'))
const normalItems = computed(() => items.filter(i => i.variant !== 'bilibili'))

const router = useRouter()
function goTo(link) {
    if (link.includes('http')) {
        window.open(link, '_blank')
        return
    }
    router.go(link)
}
</script>

<style scoped>
.map-list {
    padding: 24px 0;
}

/* B站特色 - 独立展示 */
.map-item--feature {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 24px;
    margin-bottom: 24px;
    background: #fff8f9;
    border: 1px solid rgba(251, 114, 153, 0.2);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.map-item--feature:hover {
    border-color: rgba(251, 114, 153, 0.5);
    box-shadow: 0 2px 12px rgba(251, 114, 153, 0.08);
}

.map-item__badge {
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    background: #fb7299;
    color: #fff;
    border-radius: 6px;
    letter-spacing: 0.05em;
}

.map-item__content {
    flex: 1;
    min-width: 0;
}

.map-item__title {
    display: block;
    font-size: 1.05rem;
    font-weight: 600;
    color: #c94d7a;
    margin-bottom: 2px;
}

.map-item__desc {
    font-size: 0.9rem;
    color: var(--vp-c-text-2, #64748b);
    line-height: 1.4;
}

.map-item__arrow {
    flex-shrink: 0;
    font-size: 1.1rem;
    color: #fb7299;
    opacity: 0.7;
}

.map-item--feature:hover .map-item__arrow {
    opacity: 1;
}

/* 常规列表 - 简约网格 */
.map-list__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
}

.map-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: var(--vp-c-bg-soft, #f8fafc);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s;
}

.map-item:hover {
    background: var(--vp-c-bg-mute, #f1f5f9);
}

.map-item__content {
    flex: 1;
    min-width: 0;
}

.map-item:not(.map-item--feature) .map-item__title {
    display: block;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--vp-c-text-1, #1e293b);
    margin-bottom: 2px;
}

.map-item:not(.map-item--feature) .map-item__desc {
    font-size: 0.8rem;
    color: var(--vp-c-text-2, #94a3b8);
    line-height: 1.4;
}

.map-item:not(.map-item--feature) .map-item__arrow {
    flex-shrink: 0;
    font-size: 0.9rem;
    color: var(--vp-c-text-3, #94a3b8);
}

.map-item:not(.map-item--feature):hover .map-item__arrow {
    color: var(--vp-c-brand-1, #3b82f6);
}

/* 暗黑模式 */
:root.dark .map-item--feature {
    background: rgba(251, 114, 153, 0.08);
    border-color: rgba(251, 114, 153, 0.2);
}

:root.dark .map-item--feature:hover {
    border-color: rgba(251, 114, 153, 0.4);
}

:root.dark .map-item--feature .map-item__title {
    color: #ff9eb5;
}

:root.dark .map-item {
    background: var(--vp-c-bg-soft, rgba(255, 255, 255, 0.05));
}

:root.dark .map-item:hover {
    background: var(--vp-c-bg-mute, rgba(255, 255, 255, 0.08));
}
</style>
