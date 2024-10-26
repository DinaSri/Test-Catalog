<template>
  <div class="product-catalog">
    <Navbar />
    <div class="wrap-landing-page">
      <ImageSlider :images="sliderImages" />
      <div class="product-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @click="navigateToDetail(product.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useProductStore } from '~/stores/productStore';
import ProductCard from '~/components/ProductCard.vue';
import Navbar from '~/components/Navbar.vue';
import ImageSlider from '~/components/ImageSlider.vue';
import { useRouter } from 'vue-router';

const store = useProductStore();
const router = useRouter();

onMounted(async () => {
  await store.fetchProducts();
});

const products = computed(() => store.products);
const sliderImages = computed(() => products.value.map(product => product.image));

const navigateToDetail = (id: number) => {
  router.push(`/product/${id}`);
};
</script>


