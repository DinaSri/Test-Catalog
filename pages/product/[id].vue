<template>
  <div class="product-detail">
    <Navbar />
    <div class="detail-container">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price | currency }}</p>
        <p>{{ product.description }}</p>
        <button class="back-button" @click="goBack">⬅️ Back</button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useProductStore } from '~/stores/productStore';
import Navbar from '~/components/Navbar.vue';

const route = useRoute();
const router = useRouter();
const store = useProductStore();

const product = computed(() =>
  store.products.find((p) => p.id === Number(route.params.id))
);
const goBack = () => {
  router.push('/'); // Navigate to the home page
};

onMounted(async () => {
  if (!product.value) {
    await store.fetchProducts();
  }
});
</script>

<style scoped>
/* Scoped styles for detail page */
.detail-container {
  display: flex;
  gap: 20px;
  padding: 90px;
  justify-content: center;
  
}
@media (max-width: 768px) {
  .detail-container {
    display: block;
    padding: 1rem;
  }
}

.product-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-info {
  max-width: 600px;
  font-size: 1.1rem;
  color: #fff;
}
</style>
