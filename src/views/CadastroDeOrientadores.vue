<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'

import '@/assets/css/global.css'

import axios from 'axios'

import { ref } from 'vue'
/* import { BFormGroup, BFormInput, BButton, BFormInvalidFeedback, BForm } from 'bootstrap-vue-3' */
import { BFormGroup, BFormInput, BFormInvalidFeedback, BForm } from 'bootstrap-vue-3'

const nome = ref('')
const prontuario = ref('')
const telefone = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')

const step = ref(1)

const touched = ref({
  nome: false,
  prontuario: false,
  email: false,
  senha: false,
  confirmarSenha: false,
})

const errors = ref({
  nome: false,
  prontuario: false,
  email: false,
  senha: false,
  confirmarSenha: false,
})

function validateForm() {
  errors.value = {
    nome: nome.value.length < 3, // Mínimo de 3 caracteres
    prontuario: !/^(?=.*[A-Za-z])(?=.*\d).+$/.test(prontuario.value), // Prontuário com pelo menos 1 letra e 1 número
    email: !email.value.includes('@'), // Verifica se o email contém "@"
    senha: senha.value.length < 6, // Senha com mínimo de 6 caracteres
    confirmarSenha: senha.value !== confirmarSenha.value, // Senhas coincidem
  }

  return !Object.values(errors.value).some(error => error)
}

function handleBlur(field) {
  touched.value[field] = true
  if (field === 'nome') {
    errors.value.nome = nome.value.length < 3
  } else if (field === 'prontuario') {
    errors.value.prontuario = !/^(?=.*[A-Za-z])(?=.*\d).+$/.test(prontuario.value)
  } else if (field === 'email') {
    errors.value.email = !email.value.includes('@')
  } else if (field === 'senha') {
    errors.value.senha = senha.value.length < 6
  } else if (field === 'confirmarSenha') {
    errors.value.confirmarSenha = senha.value !== confirmarSenha.value
  }
}

async function handleSubmit(event) {
  event.preventDefault()
  if (!validateForm()) {
    return
  }

  step.value = 2

  try {
    const orientador = {
      nome: nome.value,
      prontuario: prontuario.value,
      telefone: telefone.value,
      email: email.value,
      password: senha.value,
    }
    const response = await axios.post(
      'http://localhost:8082/FRAN/orientadores/signup',
      orientador
    )
    console.log(response)
    step.value = 2
  } catch (error) {
    console.log('Erro ao cadastrar orientador: ' + (error.response?.data || error.message))
  }
}
</script>

<template>
  <HeaderComp />

  <main class="conteudo">
    <div v-if="step === 1">
      <h2 class="text-center mt-4">Primeira vez aqui, orientador? Cadastre-se:</h2>

      <div class="form-container">
        <BForm @submit.prevent="handleSubmit">
          <BFormGroup label="Nome Completo:">
            <BFormInput 
              v-model="nome" 
              type="text" 
              :state="touched.nome ? !errors.nome : null" 
              @blur="handleBlur('nome')"
            />
            <BFormInvalidFeedback v-if="errors.nome">Nome deve conter no mínimo 3 caracteres.</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Prontuário:">
            <BFormInput 
              v-model="prontuario" 
              type="text" 
              :state="touched.prontuario ? !errors.prontuario : null" 
              @blur="handleBlur('prontuario')"
            />
            <BFormInvalidFeedback v-if="errors.prontuario">Prontuário deve conter pelo menos 1 letra e 1 número.</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Email:">
            <BFormInput 
              v-model="email" 
              type="email" 
              :state="touched.email ? !errors.email : null" 
              @blur="handleBlur('email')"
            />
            <BFormInvalidFeedback v-if="errors.email">Email deve conter um "@" válido.</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Senha:">
            <BFormInput 
              v-model="senha" 
              type="password" 
              :state="touched.senha ? !errors.senha : null" 
              @blur="handleBlur('senha')"
            />
            <BFormInvalidFeedback v-if="errors.senha">Senha deve ter pelo menos 6 caracteres.</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Confirmar Senha:">
            <BFormInput 
              v-model="confirmarSenha" 
              type="password" 
              :state="touched.confirmarSenha ? !errors.confirmarSenha : null" 
              @blur="handleBlur('confirmarSenha')"
            />
            <BFormInvalidFeedback v-if="errors.confirmarSenha">As senhas não coincidem.</BFormInvalidFeedback>
          </BFormGroup>

          <div class="form-check form-check-custom">
            <input type="checkbox" class="form-check-input" id="termos" name="termos" required />
            <label for="termos" class="form-check-label">Eu concordo que li os <a href="#">termos de uso</a>.</label>
          </div>

          <!-- <BButton type="submit" class="btn-custom">Criar Conta</BButton> -->
          <BotaoComp titulo="Criar Conta" tamanho="g" type="submit" />
        </BForm>
        <p class="text-center mt-3">
          Já tem uma conta? <router-link to="login">Faça login.</router-link>
        </p>
      </div>
    </div>
    <div v-else>
      <h2>Faça login para entrar</h2>
      <form class="form-container">
        <div class="form-group">
          <router-link to="homeOrientador" style="text-decoration: none"><button class="btn-custom">Login</button></router-link>
        </div>
      </form>
    </div>
  </main>

  <FooterComp />
</template>

<style scoped>
h2 {
  color: #01400b;
  text-align: center;
  margin-top: 1.5rem !important;
}

main {
  max-width: 700px;
  margin: 0 auto;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-check-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.text-center {
  text-align: center;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.mt-5 {
  margin-top: 3rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .header-logo {
    height: 60px;
  }

  header h1 {
    font-size: 1.5rem;
  }

  .container {
    padding: 10px;
  }

  .form-container {
    padding: 15px;
  }

  .form-row .form-group {
    margin-bottom: 10px;
  }

  .btn-custom {
    padding: 8px;
  }
}

/* .btn-custom {
  display: block;
  width: 50%;
  padding: 10px;
  background-color: #01400b;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
}

.btn-custom:hover {
  background-color: #012d08;
} */
</style>
