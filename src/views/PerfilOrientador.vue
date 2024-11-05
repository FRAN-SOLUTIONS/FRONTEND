<script setup>
import { ref, onMounted } from 'vue';
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
import FileNavComp from '@/components/FileNavComp.vue'
import axios from 'axios';
axios.defaults.withCredentials = true;
import '@/assets/css/global.css'

const orientador = ref(null);
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8082/FRAN/orientadores/me');
    orientador.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar orientador:", error);
  }
});

</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo mt-0">
      <FileNavComp />
      <div
        class="container mt-5 text-center"
        style="border: 1px solid #01400b; border-radius: 0.25rem"
      >
        <div class="row">
          <div
            class="col d-flex flex-column align-items-center"
            style="border-right: 1px solid #01400b; height: 100%"
          >
            <img
              src="@/assets/images/user.png"
              alt=""
              width="30%"
              style="margin: 5%"
            />
            <h2 class="mb-5">{{ orientador ? orientador.nome : "Carregando..." }}</h2>
            <h4>{{ orientador ? orientador.prontuario : "Carregando..." }}</h4>
            <h4>{{ orientador ? orientador.email : "Carregando..." }}</h4>
          </div>
          <div
            class="col d-flex flex-column align-items-center justify-content-center"
          >
            <div class="text-center mb-2"><router-link style="text-decoration: none; color: inherit;" to="/404">Dashboard</router-link></div>
            <div class="text-center mb-2"><router-link style="text-decoration: none; color: inherit;" to="/404">Alunos</router-link></div>
            <div class="text-center mb-2"><router-link style="text-decoration: none; color: inherit;" to="/404">Relatórios</router-link></div>
            <div class="text-center mb-2"><router-link style="text-decoration: none; color: inherit;" to="/404">Processos Ativos</router-link></div>
            <div class="text-center mb-2"><router-link style="text-decoration: none; color: inherit;" to="/404">Todos os Processos</router-link></div>
            <div class="text-center"><router-link style="text-decoration: none; color: inherit;" to="/404">Despachos</router-link></div>
          </div>
        </div>
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<style scoped></style>
