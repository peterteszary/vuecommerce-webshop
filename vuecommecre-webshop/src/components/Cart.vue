<template>
  <div class="container">
    <div class="heading-section">
    <h1 class="text-center">Kosár</h1>
    </div>
    <div v-if="cart.length === 0" class="text-center">
      <p>A kosarad üres.</p>
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ item.productId.name }}</h5>
          <p class="card-text">Ár: {{ formatPrice(item.productId.price) }}</p> 
          <div class="input-group mb-3">
            <button @click="decreaseQuantity(item)" class="btn btn-outline-secondary" type="button">-</button>
            <input type="text" class="form-control" :value="item.quantity" readonly>
            <button @click="increaseQuantity(item)" class="btn btn-outline-secondary" type="button">+</button>
            <button @click="removeFromCart(item)" class="btn btn-danger ml-2">Törlés</button>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p><strong>Összesen: {{ formatPrice(calculateTotalPrice()) }}</strong></p> 
        <button @click="placeOrder" class="btn btn-success btn-block">Rendelés</button>
        <p v-if="successMessage" class="text-success">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cart',
  data() {
    return {
      cart: [],
      successMessage: ''
    };
  },
  mounted() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      axios.get('http://localhost:3000/cart')
        .then(response => {
          this.cart = response.data.map(item => ({
            ...item,
            productId: {
              ...item.productId,
              price: parseFloat(item.productId.price)
            }
          }));
        })
        .catch(error => {
          console.error('Error fetching cart:', error);
        });
    },
    removeFromCart(item) {
      axios.delete(`http://localhost:3000/cart/${item.id}`)
        .then(() => {
          this.fetchCart();
        })
        .catch(error => {
          console.error('Error removing item from cart:', error);
        });
    },
    increaseQuantity(item) {
      item.quantity++;
      this.updateCartItem(item);
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.updateCartItem(item);
      }
    },
    updateCartItem(item) {
      axios.put(`http://localhost:3000/cart/${item.id}`, item)
        .then(() => {
          this.fetchCart();
        })
        .catch(error => {
          console.error('Error updating cart item:', error);
        });
    },
    placeOrder() {
      this.successMessage = 'Rendelésedet sikeresen elküldted.';
      console.log('Order placed!');
    },
    calculateTotalPrice() {
      let totalPrice = 0;
      this.cart.forEach(item => {
        totalPrice += parseFloat(item.productId.price) * item.quantity;
      });
      return totalPrice;
    },

    formatPrice(price) {
      return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', minimumFractionDigits: 0 }).format(price);
    }
  }
};
</script>

<style scoped>

</style>
