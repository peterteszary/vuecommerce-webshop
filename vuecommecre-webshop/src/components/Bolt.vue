<template>
  <div class="container">
    <h1 class="text-center">Bolt</h1>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" :src="product.img || '@/assets/images/no-image.png'" alt="Nem jelenik meg a kép">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: {{ product.price }}</p>
            <button @click="showDetails(product)" class="btn btn-primary mr-2">Részletek</button>
            <button @click="addToCart(product)" class="btn btn-success">Kosárba</button>
          </div>
        </div>
      </div>
    </div>
    <Modal :show-modal="showModal" :selected-product="selectedProduct" @close="closeModal" />
  </div>
</template>

<script>
import { fetchProducts, addToCart } from '@/services/productsService';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Bolt',
  components: {
    Modal
  },
  data() {
    return {
      products: [],
      showModal: false,
      selectedProduct: {}
    };
  },
  mounted() {
    fetchProducts()
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
  methods: {
    showDetails(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addToCart(product) {
      addToCart(product)
        .then(() => {
          console.log('Product added to cart:', product);
          
        })
        .catch(error => {
          console.error('Error adding product to cart:', error);
          
        });
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
</style>
