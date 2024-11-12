<!-- eslint-disable no-unused-vars -->
<script setup>
import FooterComp from '@/components/FooterComp.vue'
import { useAuth } from '@/services/useAuth';
import HeaderLogado from '@/components/HeaderLogado.vue';
import HeaderComp from '@/components/HeaderComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'

const { isLoggedIn } = useAuth();
console.log(isLoggedIn )

import axios from 'axios'
import validator from 'validator'

import { ref } from 'vue'

const nome = ref('')
const prontuario = ref('')
const telefone = ref('')
const email = ref('')
const curso = ref('')
const opcao = ref('')

function validarProntuario(prontuario) {
  const regex = /^[A-Za-z]{2}\d{7}$/
  return regex.test(prontuario)
}

async function handleSubmit(event) {
  event.preventDefault()

  if (
    !nome.value ||
    !prontuario.value ||
    !email.value ||
    !curso.value 
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  // Validação dos campos antes do envio
  //if (!validarProntuario(prontuario.value)) {
    //alert('Prontuário inválido!')
    //return
  //}

  if (!validator.isEmail(email.value)) {
    alert('Email válido')
    return
  }
  alert('Aluno cadastrado com sucesso!')

  try {
    const aluno = {
      nome: nome.value,
      prontuario: prontuario.value,
      telefone: telefone.value,
      email: email.value,
      curso: curso.value,
    }
    const response = await axios.post(
      'http://localhost:8082/FRAN/alunos/signup',
      aluno,
    )
    console.log(response)
    //alert('Aluno cadastrado com sucesso!')
  } catch (error) {
    // Exibe erro se houver falha no cadastro
    console.log(
      'Erro ao cadastrar aluno: ' + (error.response?.data || error.message),
    )
  }
}
</script>

<template>

<component :is="isLoggedIn ? HeaderLogado : HeaderComp  " />

  <main class="conteudo mb-5">
    <!-- <div v-if="step === 1"> -->
    <div>
      <h2 class="text-center mt-4">Informe os dados do aluno:</h2>

      <div class="form-container">
        <form id="cadastroForm" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="nome-completo">Nome Completo:</label>
              <input
                v-model="nome"
                id="nome"
                class="form-control"
                type="text"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="prontuario">Prontuário:</label>
              <input
                v-model="prontuario"
                id="prontuario"
                class="form-control"
                type="text"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label for="telefone">Telefone (opcional):</label>
              <input
                v-model="telefone"
                id="telefone"
                class="form-control"
                type="tel"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                v-model="email"
                id="email"
                class="form-control"
                type="email"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="curso">Curso:</label>
              <input
                v-model="curso"
                id="curso"
                class="form-control"
                type="text"
                required
              />
            </div>
          </div>
          <!-- <button type="submit" class="btn-custom mt-2">Cadastrar</button> -->
          <BotaoComp :titulo="'Cadastrar'"  type="submit" tamanho="g"/>
        </form>
      </div>
    </div>
  </main>

  <FooterComp />
</template>

<style scoped>
h2 {
  color: #01400b; /* Define a cor */
  text-align: center;
  margin-top: 1.5rem !important;
}

main {
  max-width: 700px; /* Aumenta a largura máxima do contêiner */
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

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eaebee; /* Cor de fundo das caixas de formulário */
}

.form-check {
  text-align: center; /* Centraliza o checkbox e o texto */
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
    height: 60px; /* Ajuste a altura da imagem conforme necessário */
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
