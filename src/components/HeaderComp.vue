<script setup>
import '../assets/css/global.css'
import BotaoBrancoComp from './BotaoBrancoComp.vue';
</script>

<template>
  <header>
    <h1 class="titulo">Orienta +</h1>
    <div class="botoesHeader">
      <router-link to="/login"><BotaoBrancoComp titulo="Login" tamanho="p" @click="logout" /></router-link>
      <router-link to="/cadastro"><BotaoBrancoComp titulo="Cadastro" tamanho="p" @click="logout" /></router-link>
    </div>
  </header>
</template>

<style scoped>
</style>