import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductStoreState {
  products: Product[];
}

export const useProductStore = defineStore('product', {
  state: (): ProductStoreState => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch('https://my-json-server.typicode.com/DinaSri/Test-Catalog/products');
      const data = await response.json();
      this.products = data; 
    },
  },
});
