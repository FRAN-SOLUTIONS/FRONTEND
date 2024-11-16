<script setup>
import '../assets/css/global.css'
import BotaoBrancoComp from './BotaoBrancoComp.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

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
    // Opcional: Mostrar mensagem de erro
  }
}

function abrirNav(){
  document.getElementById("menuOculto").style.width = "300px";
  document.getElementById("principal").style.marginLeft = "300px";
}

function fecharNav(){
  document.getElementById("menuOculto").style.width = "0";
  document.getElementById("principal").style.marginLeft = "0";
}

import { ref } from 'vue'

/* const dataHoje = ref(new Date().toLocaleDateString('pt-BR')) */
//const dataHoje = ref(new Date());

const nome = ref([]);
const email = ref([]);
const prontuario = ref([]);
const nomeEmpresa = ref([]);
const tipoAlerta = ref([]);
const msgAlerta = ref([]);
const vencimento = ref([]);

vencimento.value.push(new Date('2024-10-30'));
vencimento.value.push(new Date('2024-11-30'));
vencimento.value.push(new Date('2024-11-30'));
vencimento.value.push(new Date('2024-11-30'));

nome.value.push('Maria');
email.value.push('maria@email.com');
prontuario.value.push('SP123456');
nomeEmpresa.value.push('Google');
tipoAlerta.value.push('atrasado');
msgAlerta.value.push('O relatório está atrasado');

nome.value.push('João');
email.value.push('joao@email.com');
prontuario.value.push('SP123457');
nomeEmpresa.value.push('Microsoft');
tipoAlerta.value.push('a entregar');
msgAlerta.value.push('O relatório deve ser enviado');

nome.value.push('Gustavo');
email.value.push('gustavo@email.com');
prontuario.value.push('SP123458');
nomeEmpresa.value.push('Kiman');
tipoAlerta.value.push('entregue');
msgAlerta.value.push('O relatório foi entregue');

nome.value.push('Luiza');
email.value.push('luiza@email.com');
prontuario.value.push('SP123459');
nomeEmpresa.value.push('IFSP');
tipoAlerta.value.push('a entregar');
msgAlerta.value.push('O relatório deve ser enviado');
</script>

<template>
  <header>
    <router-link
      to="homeOrientador"
      style="text-decoration: none; color: inherit"
    >
      <h1 class="titulo">Orienta +</h1>
    </router-link>

    <div class="botoesHeader">
      <div id="pricipal">
        <span style="cursor: pointer;" @click="abrirNav()"><i class="bi bi-bell-fill notify" style="margin-right: 10px;"></i></span>
      </div>

      <BotaoBrancoComp titulo="Sair" tamanho="p" @click="logout" />
    </div>

    <aside id="menuOculto" class="menuOculto">
      <a href="javascript:void(0)" class="btnFechar" @click="fecharNav()">&times;</a>
      
      <!-- Foreach para cada alerta de aluno -->
      <div v-for="(aluno, index) in nome" :key="index" class="accordion" id="accordionExample">
        
        <!-- Accordeon vermelho se o aluno está atrasado -->
        <div class="accordion-item" v-if="tipoAlerta[index] === 'atrasado'" :style="{ color: 'red' }">
          <h2 class="accordion-header">
            <button
              class="accordion-button accordion-header"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#accordion-nome-' + index"
              aria-expanded="false"
              :aria-controls="'accordion-nome-' + index"
              v-if="tipoAlerta[index] === 'atrasado'" :style="{ color: 'red' }"
            >
              {{ nome[index] }} - {{ tipoAlerta[index] }}
            </button>
          </h2>
          <div
            :id="'accordion-nome-' + index"
            class="accordion-collapse collapse"
            :data-bs-parent="'#accordionExample'"
          >
            <div class="accordion-body">
              <router-link to="notificacoes" class="card-link" style="color: #01400b; display: block; color: #01400b">
                <strong>Mais informações</strong>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Accordeon laranja se o aluno falta entregar -->
        <div class="accordion-item" v-if="tipoAlerta[index] === 'a entregar'" :style="{ color: 'orange' }">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#accordion-nome-' + index"
              aria-expanded="false"
              :aria-controls="'accordion-nome-' + index"
              v-if="tipoAlerta[index] === 'a entregar'" :style="{ color: 'orange' }"
            >
              {{ nome[index] }} - {{ tipoAlerta[index] }}
            </button>
          </h2>
          <div
            :id="'accordion-nome-' + index"
            class="accordion-collapse collapse"
            :data-bs-parent="'#accordionExample'"
          >
            <div class="accordion-body">
              <router-link to="notificacoes" class="card-link" style="color: #01400b; display: block; color: #01400b">
                <strong>Mais informações</strong>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Accordeon azul se o aluno já entregou -->
        <div class="accordion-item" v-if="tipoAlerta[index] === 'entregue'" :style="{ color: 'blue' }">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#accordion-nome-' + index"
              aria-expanded="false"
              :aria-controls="'accordion-nome-' + index"
              v-if="tipoAlerta[index] === 'entregue'" :style="{ color: 'blue' }"
            >
              {{ nome[index] }} - {{ tipoAlerta[index] }}
            </button>
          </h2>
          <div
            :id="'accordion-nome-' + index"
            class="accordion-collapse collapse"
            :data-bs-parent="'#accordionExample'"
          >
            <div class="accordion-body">
              <router-link to="notificacoes" class="card-link" style="color: #01400b; display: block; color: #01400b">
                <strong>Mais informações</strong>
              </router-link>
            </div>
          </div>
        </div>

      </div>  
    </aside>
  </header>
</template>

<style scoped>
.notify {
  font-size: 1.5rem;
  color: white;
}

.menuOculto{
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #01400b;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 50px
}

.btnFechar{
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 50px;
  text-decoration: none;
  color: inherit;
  color: white;
  font-size: 40px;
}
</style>
