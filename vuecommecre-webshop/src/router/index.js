import { createRouter, createWebHistory } from 'vue-router';
import MainMenu from '@/components/MainMenu.vue';
import Bolt from "@/components/Bolt.vue";
import NewProduct from "@/views/NewProduct.vue";

const routes = [
  {
    path: '/',
    components: {
      default: Bolt,
      header: MainMenu
    },
    name: 'Bolt'
  },
  {
    path: '/new-product',
    components: {
      default: NewProduct,
      header: MainMenu
    },
    name: 'NewProduct'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
