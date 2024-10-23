<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import '../assets/css/global.css'

import { ref } from 'vue'

const prontuario = ref('')
const senha = ref('')

function validarProntuario(prontuario) {
  const regex = /^[A-Za-z]{2}\d{7}$/ // Dois primeiros caracteres letras, seguidos de sete números
  return regex.test(prontuario)
}

function validarUsuário() {
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

  // Lógica do backend
  alert('Login bem-sucedido!')
}
</script>

<template>
  <HeaderComp />

  <main>
    <h2 class="text-center mt-4">Faça login para entrar</h2>

    <div class="form-container">
      <form id="cadastroForm">
        <div class="form-row">
          <div class="form-group">
            <label for="prontuario">Prontuário:</label>
            <input v-model="prontuario" id="prontuario" class="form-control" type="text" required />
          </div>

          <div class="form-group">
            <label for="senha">Senha:</label>
            <input v-model="senha" id="senha" class="form-control" type="password" required />
          </div>
        </div>
        <router-link to="homeAluno" style="text-decoration: none;">
          <button type="submit" class="btn-custom" @click.prevent="validarUsuário" >Entrar</button>
        </router-link>
      </form>
      <p class="text-center mt-3">
        Esqueceu a senha?
        <router-link to="redefinirSenha">Redefinir minha senha.</router-link>
      </p>
    </div>
  </main>

  <FooterComp />
</template>

<style scoped>
h2 {
  color: #01400b; /* Define a cor */
}

main {
  max-width: 500px; /* Aumenta a largura máxima do contêiner */
  margin: 0 auto;
  padding: 20px;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: #eaebee; /* Cor de fundo das caixas de formulário */
}

.btn-custom {
  display: block;
  width: 50%; /* Diminui o tamanho do botão */
  padding: 10px;
  background-color: #01400b; /* Cor do botão */
  color: #fff;
  border-radius: 8px; /* Bordas arredondadas */
  cursor: pointer;
  margin: 30px auto;
}

.btn-custom:hover {
  background-color: #012d08; /* Cor do botão ao passar o mouse */
}
</style>
