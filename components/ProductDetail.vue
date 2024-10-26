<template>
  <div class="product-detail">
    <img :src="product.image" alt="Product Image" class="detail-image" />
    <h1 class="detail-name">{{ product.name }}</h1>
    <p class="detail-price">${{ product.price.toFixed(2) }}</p>
    <p class="detail-description">{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '~/stores/productStore';

const route = useRoute();
const store = useProductStore();
const product = ref(null);

onMounted(async () => {
  const id = parseInt(route.params.id);
  await store.fetchProducts(); // Ensure products are fetched
  product.value = store.products.find((p) => p.id === id);
});
</script>

<style scoped>
.product-detail {
  text-align: center;
}

.detail-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
