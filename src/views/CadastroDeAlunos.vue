<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useAuth } from '@/services/useAuth';
import router from '@/router';

import '@/assets/css/global.css';

import FooterComp from '@/components/FooterComp.vue';
import HeaderLogado from '@/components/HeaderLogado.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import BotaoComp from '@/components/BotaoComp.vue';

// Autenticação
const { isLoggedIn } = useAuth();
console.log(isLoggedIn);

// Dados do formulário
const nome = ref('');
const prontuario = ref('');
const telefone = ref('');
const email = ref('');
const curso = ref('');
const cursosDisponiveis = ref([]);
const errorMessage = ref('')

// Estados de validação
const touched = reactive({
  nome: false,
  prontuario: false,
  telefone: false,
  email: false,
  curso: false,
});

const errors = reactive({
  nome: false,
  prontuario: false,
  telefone: false,
  email: false,
  curso: false,
});

// Funções de validação para cada campo
const validateNome = () => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(nome.value);
const validateProntuario = () => /^[a-zA-Z]{2,3}[0-9]{6,8}$/.test(prontuario.value);
const validateTelefone = () => telefone.value === '' || /^\d{2}\d{5}-\d{4}$/.test(telefone.value); // Telefone vazio é válido
const validateEmail = () => /^[a-zA-Z0-9._%+-]+@aluno\.ifsp\.edu\.br$/.test(email.value); // Alteração para permitir apenas @aluno.ifsp.edu.br
const validateCurso = () => curso.value != '';

function handleBlur(field) {
  touched[field] = true;

  if (field === 'nome') {
    errors.nome = !validateNome();
  } else if (field === 'prontuario') {
    errors.prontuario = !validateProntuario();
  } else if (field === 'telefone') {
    errors.telefone = !validateTelefone();
  } else if (field === 'email') {
    errors.email = !validateEmail();  // Atualização da validação do e-mail
  } else if (field === 'curso') {
    errors.curso = !validateCurso();
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8082/FRAN/estagios/cursos');
    cursosDisponiveis.value = response.data;
    console.log(cursosDisponiveis)
  } catch (error) {
    console.error('Erro ao carregar os cursos:', error);
    errorMessage.value = 'Erro ao carregar os cursos disponíveis.';
  }
});

async function handleSubmit(event) {
  event.preventDefault();

  const allFieldsValid = [
    validateNome(),
    validateProntuario(),
    validateTelefone(), // Verifica se o telefone é válido, mas não impede o envio se estiver vazio
    validateEmail(),
    validateCurso(),
  ].every(Boolean);

  if (!allFieldsValid) {
    alert('Por favor, preencha todos os campos corretamente!');
    return;
  }

  try {
    const aluno = {
      nome: nome.value,
      prontuario: prontuario.value.toLowerCase(),
      telefone: telefone.value,
      email: email.value,
      curso: curso.value,
    };
    const response = await axios.post('http://localhost:8082/FRAN/alunos/signup', aluno);
    console.log(response);
    alert('Aluno cadastrado com sucesso!');
    router.push('/homeOrientador');
  } catch (error) {
    errorMessage.value = error.response?.data || error.message
    console.error('Erro ao cadastrar aluno:', error);
  }
}
</script>


<template>
  <component :is="isLoggedIn ? HeaderLogado : HeaderComp" />

  <main class="conteudo mb-5">
    <div>
      <h2 class="text-center mt-4">Informe os dados do aluno:</h2>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <div class="form-container">
        <form id="cadastroForm" @submit.prevent="handleSubmit">
          <div class="row">
            <!-- Nome -->
            <div class="form-group col-12">
              <label for="nome-completo">Nome Completo:</label>
              <b-form-input
                v-model="nome"
                id="nome"
                class="form-control"
                type="text"
                :state="touched.nome ? !errors.nome : null"
                @blur="handleBlur('nome')"
                required
              />
              <b-form-invalid-feedback>
                O nome deve conter apenas letras e espaços.
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="row">
            <!-- Prontuário -->
            <div class="form-group col-md-6">
              <label for="prontuario">Prontuário:</label>
              <b-form-input
                v-model="prontuario"
                id="prontuario"
                class="form-control"
                type="text"
                :state="touched.prontuario ? !errors.prontuario : null"
                @blur="handleBlur('prontuario')"
                required
              />
              <b-form-invalid-feedback>
                O prontuário deve conter de 2 a 3 letras seguidas de 6 a 8 números.
              </b-form-invalid-feedback>
            </div>

            <!-- Telefone -->
            <div class="form-group col-md-6">
              <label for="telefone">Telefone (opcional):</label>
              <b-form-input
                v-model="telefone"
                id="telefone"
                class="form-control"
                type="tel"
                :state="touched.telefone ? !errors.telefone : null"
                @blur="handleBlur('telefone')"
              />
              <b-form-invalid-feedback>
                O telefone deve ser no formato: DD99999-9999.
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="row">
            <!-- Email -->
            <div class="form-group col-12">
              <label for="email">Email:</label>
              <b-form-input
                v-model="email"
                id="email"
                class="form-control"
                type="email"
                :state="touched.email ? !errors.email : null"
                @blur="handleBlur('email')"
                required
              />
              <b-form-invalid-feedback>
                O e-mail deve ser do tipo 'usuario@aluno.ifsp.edu.br'.
              </b-form-invalid-feedback>
            </div>
          </div>

          <div class="row">
            <!-- Curso -->
            <div class="form-group col-12">
              <label for="curso">Curso:</label>
              <select
                v-model="curso"
                id="curso"
                class="form-control"
                :class="{ 'is-invalid': touched.curso && errors.curso }"
                @blur="handleBlur('curso')"
                required
              >
                <option value="" disabled selected>Selecione um curso</option>
                <option v-for="cursoDisponivel in cursosDisponiveis" :key="cursoDisponivel.id" :value="cursoDisponivel.nomeCurso">
                  {{ cursoDisponivel.nomeCurso }}
                </option>
              </select>
              <b-form-invalid-feedback>
                Por favor, selecione um curso válido.
              </b-form-invalid-feedback>
            </div>
          </div>

          <BotaoComp :titulo="'Cadastrar'" type="submit" tamanho="g" />
        </form>
      </div>
    </div>
  </main>

  <FooterComp />
</template>


<style scoped>
/* Remove o fundo azul nos campos */
.form-control {
  background-color: transparent !important;
  border-color: #ced4da; /* Cor padrão para borda */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

/* Verde para válido */
.form-control.is-valid {
  background-color: transparent !important;
  border-color: #28a745 !important;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

/* Vermelho para inválido */
.form-control.is-invalid {
  background-color: transparent !important;
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

h2 {
  color: #01400b;
  text-align: center;
  margin-top: 1.5rem !important;
}

main {
  max-width: 700px;
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
</style>