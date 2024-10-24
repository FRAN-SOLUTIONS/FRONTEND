<script setup>
import { reactive, ref, onMounted } from 'vue'; // Importando as funções do Vue 3
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import api from '@/services/api';

// Criando um estado reativo para a lista de alunos usando `ref`
// `ref` é utilizado para valores simples ou arrays que precisam de reatividade
const alunos = ref([]);

// Usando `reactive` para criar um objeto reativo para armazenar os dados de um aluno
// `reactive` é ideal para objetos que têm múltiplas propriedades
const Aluno = reactive({
    id: '',
    nome: '',
    email: '',
    telefone: ''
});

// Utilizando `onMounted` para executar código quando o componente é montado
onMounted(() => {
    // Fazendo uma chamada à API para obter a lista de alunos
    api.get('/alunos').then((response) => {
        alunos.value = response.data; // Atribuindo os dados recebidos ao `ref` alunos
    });
});

// Função para cadastrar um novo aluno, fazendo uma requisição POST
function cadastrar() {
    api.post('/alunos/salvar', Aluno).then(() => {
        alert('Aluno cadastrado com sucesso.');
    });
}
</script>

<template>
    <div>
        <HeaderComp />
        <main class="conteudo">
            <div style="border: 1px solid black; padding: 20px; margin: 20px;">
                <form @submit.prevent="cadastrar">
                    <h2>Cadastrar Alunos</h2>

                    <input placeholder="Nome" type="text" v-model="alunos.nome" style="display: block;">
                    <input placeholder="ID" type="text" v-model="alunos.id" style="display: block;">
                    <input placeholder="Email" type="email" v-model="alunos.email" style="display: block;">
                    <input placeholder="Telefone" type="tel" v-model="alunos.telefone" style="display: block;">
            
                    <button type="submit" class="enviar">Cadastrar</button>
                </form>
            </div>
            <div style="border: 1px solid black; padding: 20px; margin: 20px;">
                <h2>Alunos Cadastrados</h2>
                <div v-for="(aluno) in alunos" :key="aluno.id">
                    <span class="aluno__nome">Nome: <strong>{{ aluno.nome }}</strong></span>
                    <p>{{ aluno.id }}</p>
                    <p>{{ aluno.email }}</p>
                    <p>{{ aluno.telefone }}</p>
                    <hr>
                </div>
            </div>
        </main>
        <FooterComp />
    </div>
</template>

<style>
</style>