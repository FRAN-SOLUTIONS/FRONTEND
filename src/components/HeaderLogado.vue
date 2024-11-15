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
      <!-- <router-link to="404" style="text-decoration: none; color: inherit;"><i class="bi bi-bell-fill notify"></i></router-link> -->
      
      <!-- <router-link to="404" style="text-decoration: none; color: inherit;">
        <BotaoBrancoComp titulo="Notificações" tamanho="m" />
      </router-link> -->
      
      <router-link to="notificacoes" style="text-decoration: none; color: inherit;">
        <BotaoBrancoComp titulo="Notificações" tamanho="m">
          <i class="bi bi-bell-fill" style="margin-left: 10px;"></i>
        </BotaoBrancoComp>
      </router-link>

      <BotaoBrancoComp titulo="Sair" tamanho="p" @click="logout" />
    </div>
  </header>
</template>

<style scoped>
.notify{
  font-size: 1.5rem;
  color: white;
}
</style>