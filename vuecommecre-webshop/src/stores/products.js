import { defineStore } from 'pinia'

export const productsStore = defineStore( id, 'products', options, {
  state: () => ({
    products: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json.products;
        })
            

    }
  }

})