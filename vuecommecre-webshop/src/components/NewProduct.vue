<template>
  <div class="container">
    <div class="heading-section">
      <h1 class="text-center">Új termék hozzáadása</h1>
    </div>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="name">Név:</label>
        <input type="text" class="form-control" id="name" v-model="newProduct.name">
      </div>
      <div class="form-group">
        <label for="price">Ár:</label>
        <input type="text" class="form-control" id="price" v-model="newProduct.price">
      </div>
      <div class="form-group">
        <label for="img">Kép URL:</label>
        <input type="text" class="form-control mb-4" id="img" v-model="newProduct.img">
      </div>
      <button type="submit" class="btn btn-primary">Termék hozzáadása</button>
      <p v-if="successMessage" class="text-success">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newProduct: {
        name: '',
        price: '',
        img: ''
      },
      successMessage: ''
    };
  },
  methods: {
    addProduct() {
      axios.post('http://localhost:3000/products', this.newProduct)
        .then(response => {
          console.log('New product added:', response.data);
          this.successMessage = 'A terméket sikeresen hozzáadtad!';
        })
        .catch(error => {
          console.error('Error adding new product:', error);
        });
    }
  }
};
</script>

<style scoped>

</style>
