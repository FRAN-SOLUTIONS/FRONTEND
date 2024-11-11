<template>
  <header class="header d-flex justify-content-center align-items-center w-100">
      <router-link class="titulo text-center text-white text-decoration-none m-0" to="/homeOrientador">
        Orienta +
      </router-link>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #01400B;
  padding: 10px 0;
}

.titulo {
  font-size: 2rem;
}

.titulo:hover {
  transform: scale(1.3);
  transition: ease transform 1s;
}
</style>
