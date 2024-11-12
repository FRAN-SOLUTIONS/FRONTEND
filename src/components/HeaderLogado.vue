<script setup>
import BotaoComp from '@/components/BotaoComp.vue';
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
  <header class="header d-flex justify-content-center align-items-center w-100">
      <router-link class="titulo text-center text-white text-decoration-none m-0" to="/homeOrientador">
        Orienta +
      </router-link>
      <BotaoComp class="butao" titulo="Sair" tamanho="g" @click="logout" />
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

.butao{
  margin: 0;
}

</style>
