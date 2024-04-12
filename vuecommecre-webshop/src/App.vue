<template>
  <div id="app">
    <main-menu /> 
    <router-view />
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from '@/components/MainMenu.vue';
</script>

<style scoped>
</style>
