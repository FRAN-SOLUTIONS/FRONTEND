<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import BotaoComp from '@/components/BotaoComp.vue';
import HeaderLogado from '@/components/HeaderLogado.vue';
import FooterComp from '@/components/FooterComp.vue';
import FileNavComp from '@/components/FileNavComp.vue';
import '@/assets/css/global.css'

const estagios = ref([]); // Novo array para armazenar os estágios
const showModal = ref(false); // Controla a visibilidade do modal
const selectedEstagio = ref(null); // Armazena o estágio selecionado
const searchValue = ref('');
const cardsPerPage = 10;
const currentPage = ref(1);

function openModal(estagio) {
    selectedEstagio.value = estagio;
    showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function normalizeText(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remover acentos e espaços extras
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
              <input v-model="searchValue" placeholder="Pesquisar Estágio" aria-label="Search" />
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

      <div class="estagiario-container">
        <div v-for="estagio in paginatedEstagios" :key="estagio.id" class="card" @click="openModal(estagio)">
          <p><strong>Nome do aluno:</strong> {{ estagio.aluno.nome }}</p>
          <p><strong>Prontuário:</strong> {{ estagio.aluno.prontuario }}</p>
          <p><strong>Curso:</strong> {{ estagio.aluno.curso }}</p>
          <p><strong>Status:</strong> {{ estagio.status }}</p>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)" aria-label="Previous">&laquo;</a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)" aria-label="Next">&raquo;</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>

  <FooterComp />

  <!-- Modal de Estágio -->
  <div v-show="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="card container my-5 shadow-sm card_container">
        <div class="card-body py-4 px-5">
          <div id="Infos" class="row">
            <div id="alunoInfo" class="col pe-0 d-flex flex-column align-items-center justify-content-center">
              <h5 class="fw-bold">Nome do Aluno: <span class="fw-normal">{{ selectedEstagio?.aluno?.nome }}</span></h5>
              <h5 class="fw-bold">Prontuário: <span class="fw-normal">{{ selectedEstagio?.aluno?.prontuario }}</span></h5>
              <h5 class="fw-bold">Curso: <span class="fw-normal">{{ selectedEstagio?.aluno?.curso }}</span></h5>
              <h5 class="fw-bold mb-0">E-mail: <span class="fw-normal">{{ selectedEstagio?.aluno?.email }}</span></h5>
              <h5 class="fw-bold mb-0">Telefone: <span class="fw-normal">{{ selectedEstagio?.aluno?.telefone }}</span></h5>
            </div>

            <div class="vr p-0"></div>

            <div id="estagioInfo" class="col ps-5">
              <h5 class="fw-bold">Período de Estágio: <span class="fw-normal">{{ selectedEstagio?.dataInicio }} a {{ selectedEstagio?.dataTermino }}</span></h5>
              <h5 class="fw-bold">Status do Estágio: <span class="fw-normal">{{ selectedEstagio?.status }}</span></h5>
              <h5 class="fw-bold">Estágio Obrigatório: <span class="fw-normal">{{ selectedEstagio?.obrigatorio ? 'SIM' : 'NÃO' }}</span></h5>
              <h5 class="fw-bold mb-0">Carga Horária Diária: <span class="fw-normal">{{ selectedEstagio?.cargaDiaria }} horas</span></h5>
            </div>

            <div id="botoes" class="col ps-5">
              <h5 class="fw-bold mb-3">Ações Rápidas</h5>
              <BotaoComp titulo="Gerar despacho inicial" tamanho="g" />
              <BotaoComp titulo="Gerar despacho final" tamanho="g" />
              <BotaoComp titulo="Iniciar estágio automático" tamanho="g" />
              <BotaoComp titulo="Finalizar estágio automático" tamanho="g" />
            </div>
          </div>
          <hr class="m-0" />
          <div class="table-responsive mt-5">
            <table class="table table-bordered w-75">
              <thead>
                <tr>
                  <th>Mês do Relatório</th>
                  <th>Data de Início-Fim</th>
                  <th>Data Máxima para Entrega</th>
                  <th>Data da Entrega</th>
                  <th>Status</th>
                  <th>Validar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th scope="row">Out/2024</th>
                <td>10/10/2024 a 31/10/2024</td>
                <td>30/11/2024</td>
                <td>-</td>
                <td>Futuro</td>
                <td>
                  <input
                    class="form-check-input checkbox"
                    autocomplete="off"
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Nov/2024</th>
                <td>10/11/2024 a 30/11/2024</td>
                <td>31/12/2024</td>
                <td>-</td>
                <td>Futuro</td>
                <td>
                  <input
                    class="form-check-input checkbox"
                    autocomplete="off"
                    type="checkbox"
                  />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
  color: #01400b;
}

.card_container{
    width: 100%;
}

.card_body{
    width: 100%;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.estagiario-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 20px;
  transition: transform 0.3s ease;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.estagioInfo{
    display: flex;
    align-items: center;
    justify-content: center
}

</style>
