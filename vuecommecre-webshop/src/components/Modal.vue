<template>
    <div>
      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content">
          <div class="box">
            <h1>{{ selectedProduct.name }}</h1>
            <p>Price: {{ selectedProduct.price }}</p>
            <!-- Itt jeleníthetjük meg az összes többi információt a termékről -->
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: {
        type: Boolean,
        default: false
      },
      selectedProduct: Object
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
  .modal {
    display: none;
  }
  
  .modal.is-active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
  }
  
  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  </style>
  