<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import HeaderLogado from '@/components/HeaderLogado.vue';
import FooterComp from '@/components/FooterComp.vue';
import FileNavComp from '@/components/FileNavComp.vue';
import BotaoComp from '@/components/BotaoComp.vue';

import '@/assets/css/global.css'

const estagios = ref([]); // Novo array para armazenar os estágios
const searchValue = ref('');
const cardsPerPage = 10;
const currentPage = ref(1);


function normalizeText(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ');
}

const filteredEstagios = computed(() => {
    const normalizedSearch = normalizeText(searchValue.value);
    return estagios.value.filter(estagio =>
        normalizeText(estagio.aluno.nome).includes(normalizedSearch)
    );
});

const paginatedEstagios = computed(() => {
    const start = (currentPage.value - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    return filteredEstagios.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filteredEstagios.value.length / cardsPerPage));

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8082/FRAN/estagios/');
        estagios.value = response.data;
        console.log(response.data)
    } catch (error) {
        console.error("Erro ao buscar os estágios:", error);
    }
});
</script>

<template>
    <HeaderLogado />
    <main class="conteudo">
        <FileNavComp />

        <div class="p-3">
            <h2>Meus Estágios: </h2>

            <div class="actions">
                <nav>
                    <div class="container-fluid">
                        <form class="d-flex" @submit.prevent>
                            <input class="" v-model="searchValue" placeholder="Pesquisar Estágio" aria-label="Search" />
                            <i class="bi bi-search"></i>
                        </form>
                    </div>
                </nav>

                <router-link to="cadastroEstagio">
                    <BotaoComp titulo="Adicionar Estágio" tamanho="m" type="submit"/>
                </router-link>
                <router-link to="cadastroAlunos">
                    <BotaoComp titulo="Adicionar Aluno" tamanho="m" type="submit"/>
                </router-link>
            </div>

            <div class="estagiario-container" id="estagiario-container">
                <div v-for="estagio in paginatedEstagios" :key="estagio.id" class="card">
                    <p><strong>Nome do aluno:</strong> {{ estagio.aluno.nome }}</p>
                    <p><strong>Prontuario:</strong> {{ estagio.aluno.prontuario }}</p>
                    <p><strong>Curso:</strong> {{ estagio.aluno.curso }}</p>
                    <p><strong>Status:</strong> {{ estagio.status }}</p>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
                        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
h2 {
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
    color: #01400b;
}

.actions {
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.search-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 250px;
}

.search-container input {
    padding: 3px 170px;
    border-radius: 15px;
    border: 1px solid #ccc;
    width: 100%;
}

.search-container i {
    position: absolute;
    left: 310px;
    color: #999;
}

.estagiario-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 20px;  
}

.card {
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    position: relative;
}

.pagination {
    justify-content: center;
    margin-top: 20px;
}

/* .btn-action {
    display: inline-flex;
    align-items: center;
    color: #339933;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background: none;
}

.btn-action i {
    margin-right: 5px;
} */

/* div > nav{
    
} */

/* body {
    background-color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
} */

/* header {
    background-color: #01400B;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 70px;
} */

/* header img {
    height: 50px;
} */

/* .user-icon-container {
    display: flex;
    align-items: center;
} */

/* header .user-icon {
    font-size: 30px;
    color: white;
} */

/* .main-content {
    background-color: white;
    padding: 50px;
    width: auto;
    margin: 30px auto;
} */

</style>