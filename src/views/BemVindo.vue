<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <h1>Bem vindo.</h1>
    <HelloWorld msg="You did it!" />
    <RouterLink to="/home">Home</RouterLink>
  </main>
</template>
