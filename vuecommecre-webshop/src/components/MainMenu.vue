<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Webshop</router-link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav"> 
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Bolt</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new-product" class="nav-link">Új termék</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Kosár</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

  
  <script>
  export default {
    
  };
  </script>
  
  <style scoped>
  
  </style>
  