<script setup>
import '../assets/css/global.css'
import BotaoBrancoComp from './BotaoBrancoComp.vue'
</script>

<template>
  <header>
    <div class="titulo-container">
      <router-link
        to="home"
        style="text-decoration: none; color: inherit"
      >
        <h1 class="titulo">Orienta +</h1>
      </router-link>
    </div>

    <div class="botoesHeader">
      <router-link to="/login"
        ><BotaoBrancoComp titulo="Login" tamanho="p"
      /></router-link>
      <router-link to="/cadastro"
        ><BotaoBrancoComp titulo="Cadastro" tamanho="p"
      /></router-link>
    </div>
  </header>
</template>

<style scoped>
.titulo,
.titulo::after,
.titulo::before {
  text-decoration: none !important;
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
  outline: none;
}
</style>
