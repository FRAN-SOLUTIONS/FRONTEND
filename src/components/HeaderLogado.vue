<script setup>
import '../assets/css/global.css'
import BotaoBrancoComp from './BotaoBrancoComp.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

axios.defaults.withCredentials = true

const router = useRouter()

const logout = async () => {
  try {
    const response = await axios.post(
      'http://localhost:8082/FRAN/orientadores/logout',
    )
    if (response.status === 200) {
      router.push({ name: 'LoginPage' })
    }
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    alert('Erro ao desconectar. Tente novamente mais tarde.')
  }
}

const menuAberto = ref(false)

function abrirNav() {
  menuAberto.value = true
}

function fecharNav() {
  menuAberto.value = false
}

function removerAluno(index) {
  alunos.value.splice(index, 1) // Remove o aluno da lista
}

const alunos = ref([
  {
    nome: 'Maria',
    email: 'maria@email.com',
    prontuario: 'SP123456',
    nomeEmpresa: 'Google',
    tipoAlerta: 'atrasado',
    msgAlerta: 'O relatório está atrasado',
    vencimento: new Date('2024-10-30'),
  },
  {
    nome: 'João',
    email: 'joao@email.com',
    prontuario: 'SP123457',
    nomeEmpresa: 'Microsoft',
    tipoAlerta: 'atrasado',
    msgAlerta: 'O relatório está atrasado',
    vencimento: new Date('2024-10-30'),
  },
  {
    nome: 'Gustavo',
    email: 'gustavo@email.com',
    prontuario: 'SP123458',
    nomeEmpresa: 'Kiman',
    tipoAlerta: 'entregue',
    msgAlerta: 'O relatório foi entregue',
    vencimento: new Date('2024-11-30'),
  },
  {
    nome: 'Luiza',
    email: 'luiza@email.com',
    prontuario: 'SP123459',
    nomeEmpresa: 'IFSP',
    tipoAlerta: 'a entregar',
    msgAlerta: 'O relatório deve ser enviado',
    vencimento: new Date('2024-11-30'),
  },
])

function formatarData(data) {
  const dataObj = new Date(data);
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long', // Nome completo do dia da semana
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dataObj);
}
</script>

<template>
  <header>
    <ul class="nav">
      <li class="nav-item">
        <router-link
          to="homeOrientador"
          class="nav-link"
          :class="{ active: $route.name === 'HomeOrientador' }"
          aria-current="page"
          style="color: inherit; text-decoration: none"
        >
          DashBoard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="perfil"
          class="nav-link"
          :class="{ active: $route.name === 'Perfil' }"
          style="color: inherit; text-decoration: none"
        >
          Perfil
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="notificacoes"
          class="nav-link"
          :class="{ active: $route.name === 'NotificacoesPage' }"
          aria-current="page"
          style="color: inherit; text-decoration: none"
        >
          Alertas
        </router-link>
      </li>
    </ul>

    <div class="titulo-container">
      <router-link
        to="HomeOrientador"
        style="text-decoration: none; color: inherit"
      >
        <h1 class="titulo">Orienta +</h1>
      </router-link>
    </div>

    <div class="botoesHeader">
      <div id="principal">
        <span style="cursor: pointer" @click="abrirNav()">
          <i class="bi bi-bell-fill notify" style="margin-right: 10px"></i>
        </span>
      </div>
      <BotaoBrancoComp titulo="Sair" tamanho="p" @click="logout" />
    </div>

    <aside
      id="menuOculto"
      class="menuOculto"
      :style="{ width: menuAberto ? '300px' : '0' }"
    >
      <a href="javascript:void(0)" class="btnFechar" @click="fecharNav()">
        &times;
      </a>

      <!-- Foreach para cada aluno -->
      <div
        v-for="(aluno, index) in alunos"
        :key="index"
        class="accordion"
        id="accordionExample"
      >
        <div
          class="accordion-item m-3"
          :class="aluno.tipoAlerta.replace(' ', '-')"
          v-show="aluno.tipoAlerta === 'atrasado'"
        >
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#accordion-nome-' + index"
              aria-expanded="false"
              :aria-controls="'accordion-nome-' + index"
            >
              {{ aluno.nome }} - <strong>{{ aluno.tipoAlerta }}</strong>
            </button>
          </h2>
          <div
            :id="'accordion-nome-' + index"
            class="accordion-collapse collapse"
            :data-bs-parent="'#accordionExample'"
          >
            <div
              class="accordion-body d-flex justify-content-between align-items-center"
            >
              <div class="container">
                <div class="row ">
                  <div class="col d-flex flex-column">
                    <div class="flex-fill">
                      <p style="color: #01400b; display: block; margin-bottom: 0;">Vencimento:</p>
                      <strong>{{ formatarData(aluno.vencimento) }}</strong>
                    </div>
                    <div class="flex-fill">
                      <router-link
                        to="notificacoes"
                        class="card-link"
                        style="color: #01400b; display: block; color: #01400b"
                      >
                        <strong>Mais informações</strong>
                      </router-link>
                    </div>
                  </div>
                  <div class="col-2 d-flex align-items-center justify-content-center">
                    <i class="bi bi-trash trash" @click="removerAluno(index)"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </header>

  <!-- Alerta de alunos atrasados -->
  <!-- <div v-for="(aluno, index) in alunos" :key="index">
    <div
      v-if="aluno.tipoAlerta === 'atrasado'"
      class="alert alert-danger d-flex justify-content-between"
      role="alert"
    >
      <span>
        <strong>{{ aluno.nome }}</strong
        >: {{ aluno.msgAlerta }} - Vencimento:
        {{ aluno.vencimento.toLocaleDateString() }}
      </span>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div> -->
</template>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
}

.nav-link {
  background-color: transparent; /* Sem fundo para abas inativas */
  color: white !important;
  transition:
    color 0.3s,
    background-color 0.3s; /* Suaviza a transição */
}

.nav-link.active {
  background-color: transparent !important;
  color: white !important;
  border-bottom: 1px solid white;
  box-sizing: border-box;
}

.nav-link:hover {
  font-size: 1.2rem;
  font-weight: bold;
}

.notify {
  font-size: 1.5rem;
  color: white;
}

.accordion-button:focus {
  outline: none !important;
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  background-color: #fcb9b9; /* Substitua pelo tom desejado */
  color: #01400c; /* Opcional: ajuste a cor do texto */
  border-color: #01400b; /* Opcional: ajuste a cor da borda */
}

.trash {
  font-size: 1.5rem;
  color: #01400b;
  cursor: pointer;
}

.trash:hover {
  color: red;
  transform: scale(1.2);
  transition: 0.2s;
}

.menuOculto {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #01400b;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 50px;
}

.btnFechar {
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 50px;
  text-decoration: none;
  color: inherit;
  color: white;
  font-size: 40px;
}

.accordion-item.atrasado {
  color: red;
}

.accordion-item.a-entregar {
  color: orange;
}

.accordion-item.entregue {
  color: blue;
}
</style>
