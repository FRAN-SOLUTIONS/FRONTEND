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

function validarProntuario(prontuario) {
  const regex = /^[A-Za-z]{2}\d{7}$/
  return regex.test(prontuario)
}

function validarSenha(senha) {
  return senha.length >= 6
}

async function handleSubmit() {
  // Validação dos campos antes do envio
  if (!prontuario.value) {
    alert('Por favor, preencha o prontuário.')
    return
  } else if (!validarProntuario(prontuario.value)) {
    alert('Prontuário inválido!')
    return
  } else if (!senha.value) {
    alert('Por favor, digite sua senha.')
    return
  } else if (!validarSenha(senha.value)) {
    alert('A senha deve ter pelo menos 6 caracteres.')
    return
  }

  try {
    const orientador = {
      prontuario: prontuario.value,
      password: senha.value
    }
    const response = await axios.post('http://localhost:8082/FRAN/orientadores/login', orientador)
      router.push({ name: 'HomeOrientador'})
      console.log(response.data)
  } catch (error) {
    console.log('Erro ao fazer login: ' + (error.response?.data || error.message))
  }
}
</script>

<template>
  <HeaderComp />

  <main class="conteudo">
    
    <h2>Faça login para entrar</h2>

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
        <!-- <button type="submit" class="btn-custom">Entrar</button> -->
        <BotaoComp titulo="Entrar" tamanho="m" type="submit"/>
      </form>
      <p class="text-center mt-3">Esqueceu a senha? <router-link to="redefinirSenha">Redefinir minha senha.</router-link></p>
    </div>
  </main>

  <FooterComp />
</template>

<style scoped>
h2 {
  color: #01400b; /* Define a cor */
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
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
  background-color: #eaebee;
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
