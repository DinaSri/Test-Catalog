<template>
  <div class="wrap-slider">
  <div class="image-slider">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="slide" v-for="(product, index) in products" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <div class="slide-info">
          <h3>{{ product.name }}</h3>
          <p>Price: ${{ product.price }}</p>
        </div>
      </div>
    </div>
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductStore } from '~/stores/productStore';

const productStore = useProductStore();

const products = ref([]);

onMounted(async () => {
  await productStore.fetchProducts(); // Fetch products from the store
  products.value = productStore.products; // Assign fetched products to the local variable
});

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % products.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + products.value.length) % products.value.length;
};
</script>


