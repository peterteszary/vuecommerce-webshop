<template>
  <div id="app">
    <main-menu /> 
    <router-view />
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '/src/css/style.css';
import MainMenu from '@/components/MainMenu.vue';
</script>

<style scoped>
</style>
