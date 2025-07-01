<template>
    <div class="image-card">
        <img :src="imageSrc" alt="Image" class="image-card__image" />
        <p class="image-card__description">{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    imageSrc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.image-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
}

.image-card__image {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-card__description {
    margin-top: 8px;
    font-size: 14px;
    color: #555;
    text-align: center;
}
</style>