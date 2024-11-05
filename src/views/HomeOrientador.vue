<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
import FileNavComp from '@/components/FileNavComp.vue'

// Estado para armazenar a lista de estágios
const estagios = ref([])

// Função para buscar os estágios do orientador logado
const fetchEstagios = async () => {
  try {
    const response = await axios.get('http://localhost:8082/FRAN/estagios/orientador/estagios')
    estagios.value = response.data
  } catch (error) {
    console.error("Erro ao buscar estágios:", error)
  }
}

// Chama a função `fetchEstagios` ao montar o componente
onMounted(fetchEstagios)
</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo">
      <FileNavComp />
      <div>
        <h1>DashBoard do Orientador</h1>
        
        <router-link to="cadastroAlunos">
          <h2>Cadastrar novo aluno/orientando</h2>
        </router-link>
        <router-link to="cadastroEstagio">
          <h2>Cadastrar novo estágio de um aluno</h2>
        </router-link>

        <h2>Lista de Estágios</h2>
        <!-- Renderiza a lista de estágios do orientador -->
        <ul>
          <li v-for="estagio in estagios" :key="estagio.codigo">
            <p><strong>Aluno:</strong> {{ estagio.aluno.nome }}</p>
            <p><strong>Carga Diária:</strong> {{ estagio.cargaDiaria }} horas</p>
            <p><strong>Data de Início:</strong> {{ estagio.dataInicio }}</p>
            <p><strong>Data de Término:</strong> {{ estagio.dataTermino }}</p>
            <p><strong>Obrigatório:</strong> {{ estagio.obrigatorio ? 'Sim' : 'Não' }}</p>
            <p><strong>Status:</strong> {{ estagio.status ? 'Ativo' : 'Inativo' }}</p>
            <hr />
          </li>
        </ul>
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<style scoped>
/* Estilização opcional para melhorar a exibição da lista */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}
</style>
