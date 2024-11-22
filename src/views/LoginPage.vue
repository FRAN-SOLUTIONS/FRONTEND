<!-- eslint-disable no-unused-vars -->
<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'

import '@/assets/css/global.css'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
axios.defaults.withCredentials = true;

const router = useRouter()

const prontuario = ref('')
const senha = ref('')
const email = ref('') // Para capturar o email no modal de redefinição de senha
const showResetModal = ref(false) // Controla se o modal de redefinição está visível
const errorMessage = ref('')


function validarProntuario(prontuario) {
    const regex = /^[A-Za-z]{0,3}\d{6,8}$/
  return regex.test(prontuario)
}

async function handleSubmit() {
  if (!prontuario.value) {
    alert('Por favor, preencha o prontuário.')
    return
  } else if (!validarProntuario(prontuario.value)) {
    alert('Prontuário inválido!')
    return
  } else if (!senha.value) {
    alert('Por favor, digite sua senha.')
    return
  }

  try {
    const orientador = {
      prontuario: prontuario.value.toLowerCase(),
      password: senha.value
    }
    const response = await axios.post('http://localhost:8082/FRAN/orientadores/login', orientador)
    router.push({ name: 'HomeOrientador' })
    console.log(response.data)
  } catch (error) {
    errorMessage.value = error.response?.data || error.message
    console.log('Erro ao fazer login: ' + (error.response?.data || error.message))
  }
}

// Função para enviar o e-mail de redefinição de senha
async function sendResetEmail() {
  if (!email.value) {
    alert('Por favor, preencha o e-mail.')
    return
  }

  try {
    await axios.post('http://localhost:8082/FRAN/orientadores/forgot-password', { email: email.value })
    alert('E-mail de redefinição de senha enviado! Verifique sua caixa de entrada.')
    showResetModal.value = false // Fecha o modal após o envio
  } catch (error) {
    console.log('Erro ao enviar o e-mail: ' + (error.response?.data || error.message))
  }
}
</script>


<template>
  <HeaderComp />

  <main class="conteudo">
    <h2>Faça login para entrar</h2>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="prontuario">Prontuário:</label>
            <input
              v-model="prontuario"
              id="prontuario"
              class="form-control"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label for="senha">Senha:</label>
            <input v-model="senha" id="senha" class="form-control" type="password" required />
          </div>
        </div>
        <BotaoComp titulo="Entrar" tamanho="m" type="submit"/>
      </form>
      <p class="text-center mt-3">
        Esqueceu a senha? 
        <button @click="showResetModal = true" class="link-button">
          Redefinir minha senha.
        </button>
      </p>
    </div>
  </main>

  <FooterComp />

  <!-- Modal de Redefinição de Senha -->
  <div v-if="showResetModal" class="modal-backdrop">
    <div class="modal">
      <h3>Redefinir Senha</h3>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input
          v-model="email"
          id="email"
          class="form-control"
          type="email"
          required
        />
      </div>
      <div class="modal-actions">
        <BotaoComp titulo="Enviar E-mail" tamanho="m" @click="sendResetEmail" />
        <BotaoComp titulo="Cancelar" tamanho="m" @click="showResetModal = false" />
      </div>
    </div>
  </div>
</template>


<style scoped>
h2 {
  color: #01400b; /* Define a cor */
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%; /* Para garantir boa visualização em telas menores */
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

.modal h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #01400b;
}

.modal-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.link-button {
  background: none;
  border: none;
  color: #01400b;
  cursor: pointer;
  text-decoration: underline;
}

.link-button:hover {
  color: #012d08;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* .btn-custom {
  display: block;
  width: 50%;
  padding: 10px;
  background-color: #01400b;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  margin: 30px auto;
}

.btn-custom:hover {
  background-color: #012d08;
} */
</style>