<script setup>
import '../assets/css/global.css'

import BotaoBrancoComp from './BotaoBrancoComp.vue';

import axios from 'axios'

import { useRouter } from 'vue-router'

axios.defaults.withCredentials = true;

const router = useRouter()
const logout = async () => {
  try {
    const response = await axios.post('http://localhost:8082/FRAN/orientadores/logout')
    
    if (response.status === 200) {
      router.push({ name: 'LoginPage' })
    }
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    // Opcional: Mostrar mensagem de erro
  }
}
</script>

<template>
  <header>
    <router-link to="homeOrientador" style="text-decoration: none; color: inherit;">
      <h1 class="titulo">Orienta +</h1>
    </router-link>

    <div class="botoesHeader">
      <BotaoBrancoComp titulo="Sair" tamanho="p" @click="logout" />
    </div>
  </header>
</template>

<style scoped>
</style>