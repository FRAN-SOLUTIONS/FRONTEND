<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'

import '@/assets/css/global.css'

import axios from 'axios'

import { ref } from 'vue'
import { BFormGroup, BFormInput, BFormInvalidFeedback, BForm } from 'bootstrap-vue-3'

import { useRouter } from 'vue-router';
const router = useRouter();

const nome = ref('')
const prontuario = ref('')
const telefone = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const errorMessage = ref('')

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
  const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/; // Permite letras com acento e espaços
  const prontuarioRegex = /^[a-zA-Z]{0,3}[0-9]{6,8}$/; // De 0 a 3 letras seguidas de 6 a 8 números
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*ifsp\.edu\.br$/;
  const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // Pelo menos uma letra, um número e 8 caracteres

  errors.value = {
    nome: !nomeRegex.test(nome.value),
    prontuario: !prontuarioRegex.test(prontuario.value),
    email: !emailRegex.test(email.value),
    senha: !senhaRegex.test(senha.value),
    confirmarSenha: senha.value !== confirmarSenha.value,
  };

  return !Object.values(errors.value).some(error => error);
}

function handleBlur(field) {
  const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
  const prontuarioRegex = /^[a-zA-Z]{0,3}[0-9]{6,8}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*ifsp\.edu\.br$/;
  const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // Pelo menos uma letra, um número e 8 caracteres

  touched.value[field] = true;
  if (field === "nome") {
    errors.value.nome = !nomeRegex.test(nome.value);
  } else if (field === "prontuario") {
    errors.value.prontuario = !prontuarioRegex.test(prontuario.value);
  } else if (field === "email") {
    errors.value.email = !emailRegex.test(email.value);
  } else if (field === "senha") {
    errors.value.senha = !senhaRegex.test(senha.value);
  } else if (field === "confirmarSenha") {
    errors.value.confirmarSenha = senha.value !== confirmarSenha.value;
  }
}

async function handleSubmit(event) {
  event.preventDefault()
  if (!validateForm()) {
    return
  }

  try {
    const orientador = {
      nome: nome.value,
      prontuario: prontuario.value,
      email: email.value,
      telefone: telefone.value,
      password: senha.value,
    }
    const response = await axios.post(
      'http://localhost:8082/FRAN/orientadores/signup',
      orientador
    )
    
    console.log(response)
    router.push('/login')
    
  } catch (error) {
    errorMessage.value = error.response?.data || error.message
    console.log('Erro ao cadastrar orientador: ' + (error.response?.data || error.message))
  }
}
</script>

<template>
  <HeaderComp />

  <main class="conteudo">
    <div>
      <h2 class="text-center mt-4">Primeira vez aqui, orientador? Cadastre-se:</h2>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <div class="form-container">
        <BForm @submit.prevent="handleSubmit">
          <BFormGroup label="Nome Completo:">
            <BFormInput 
              v-model="nome" 
              type="text" 
              :state="touched.nome ? !errors.nome : null" 
              @blur="handleBlur('nome')"
            />
            <BFormInvalidFeedback v-if="errors.nome">Nome deve conter apenas letras e espaços.</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Prontuário:">
            <BFormInput 
              v-model="prontuario" 
              type="text" 
              :state="touched.prontuario ? !errors.prontuario : null" 
              @blur="handleBlur('prontuario')"
            />
            <BFormInvalidFeedback v-if="errors.prontuario">Prontuário deve conter de 0 a 3 letras seguidas de 6 a 8 números.</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Email:">
            <BFormInput 
              v-model="email" 
              type="email" 
              :state="touched.email ? !errors.email : null" 
              @blur="handleBlur('email')"
            />
            <BFormInvalidFeedback v-if="errors.email">Email deve conter "@ifsp.edu.br".</BFormInvalidFeedback>
          </BFormGroup>

          <BFormGroup label="Senha:">
            <BFormInput 
              v-model="senha" 
              type="password" 
              :state="touched.senha ? !errors.senha : null" 
              @blur="handleBlur('senha')"
            />
            <BFormInvalidFeedback v-if="errors.senha">
              Senha deve conter pelo menos 8 caracteres, incluindo letras e números.
            </BFormInvalidFeedback>
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

          <BotaoComp titulo="Criar Conta" tamanho="g" type="submit" />
        </BForm>
        <p class="text-center mt-3">
          Já tem uma conta? <router-link to="login">Faça login.</router-link>
        </p>
      </div>
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

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
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
</style>
