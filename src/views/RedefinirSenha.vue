<script setup>
import '@/assets/css/global.css'

import HeaderComp from '@/components/HeaderComp.vue'
import { useAuth } from '@/services/useAuth';
import HeaderLogado from '@/components/HeaderLogado.vue';
import FooterComp from '@/components/FooterComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'

import validator from 'validator'

import { ref } from 'vue'

import { useRouter } from 'vue-router' // Importa o router

const { isLoggedIn } = useAuth();

const router = useRouter() // Inicializa o router

// Variáveis reativas
const step = ref(1) // Controla qual etapa está ativa

const enderecoEmail = ref('')
const novaSenha = ref('')
const confirmaSenha = ref('')

// Função para enviar o email e passar para a próxima etapa
function sendEmail() {
  if (!enderecoEmail.value) {
    alert('Por favor, digite seu email.')
    return
  } else if (!validator.isEmail(enderecoEmail.value)) {
    // Valida o e-mail
    alert('Email válido')
    return
  }
  // Lógica do backend mandar email

  step.value = 2 // Avança para a etapa de redefinição de senha
}

// Função para validar e redefinir a senha
function resetPassword() {
  if (novaSenha.value !== confirmaSenha.value) {
    alert('As senhas não coincidem!')
    return
  }

  alert('Senha redefinida com sucesso!')

  // Lógica do backend para enviar a nova senha ao servidor
  router.push({ name: 'LoginPage' })
}
</script>

<template>
 <component :is="isLoggedIn ? HeaderLogado : HeaderComp  " />

  <main class="conteudo">
    
    <h2 class="text-center">
      Preencha os campos a seguir para redefinir sua senha:
    </h2>

    <div class="form-container">
      <form>
        <div v-if="step === 1">
          <div class="form-group">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              v-model="enderecoEmail"
              class="form-control"
              required
            />

            <BotaoComp titulo="Enviar" tamanho="m" @click="sendEmail" />
            <!-- <button @click="sendEmail" class="btn-custom">Enviar</button> -->
          </div>
        </div>
        <div v-else-if="step === 2">
          <div class="form-group">
            <label for="nova-Senha" class="form-label">Nova Senha:</label>
            <input
              type="password"
              v-model="novaSenha"
              class="form-control"
              required
            />

            <label for="confirma-senha" class="form-label"
              >Confirme a Nova Senha:</label
            >
            <input
              type="password"
              v-model="confirmaSenha"
              class="form-control"
              required
            />

            <BotaoComp
              titulo="Redefinir"
              tamanho="m"
              type="submit"
              @click.prevent="resetPassword"
            />
            <!-- <button @click.prevent="resetPassword" class="btn-custom">
              Redefinir
            </button>  -->
          </div>
        </div>
      </form>
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
  max-width: 500px; /* Aumenta a largura máxima do contêiner */
  margin: 50px auto;
  margin-top: 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
