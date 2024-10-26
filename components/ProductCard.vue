<template>
  <div class="product-card" @click="$emit('click')">
    <img :src="product.image" alt="Product Image" />
    <h5>{{ product.name }}</h5>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}>();
</script>


