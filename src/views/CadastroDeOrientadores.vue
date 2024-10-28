<!-- eslint-disable no-unused-vars -->
<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import axios from 'axios'

import { ref } from 'vue'

const nome = ref('')
const prontuario = ref('')
const telefone = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')

const step = ref(1)

async function handleSubmit(event) {
  event.preventDefault()
  if (
    !nome.value ||
    !prontuario.value ||
    !email.value ||
    !senha.value ||
    !confirmarSenha.value
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem.')
    return
  }
  step.value = 2

  try {
    const orientador = {
      nome: nome.value,
      prontuario: prontuario.value,
      email: email.value,
      password: senha.value,
    }
    const response = await axios.post(
      'http://localhost:8082/FRAN/orientadores/signup',
      orientador,
    )
    console.log(response)
    step.value = 2
  } catch (error) {
    // Exibe erro se houver falha no cadastro
    console.log(
      'Erro ao cadastrar aluno: ' + (error.response?.data || error.message),
    )
  }
}
</script>

<template>
  <HeaderComp />

  <main class="conteudo">
    <div v-if="step === 1">
      <h2 class="text-center mt-4">
        Primeira vez aqui, orientador? Cadastre-se:
      </h2>

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
            <div class="form-group col-md-12">
              <label for="prontuario">Prontuário:</label>
              <input
                v-model="prontuario"
                id="prontuario"
                class="form-control"
                type="text"
                required
              />
            </div>
          </div>
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
          <div class="form-group">
            <label for="senha">Senha:</label>
            <input
              v-model="senha"
              id="senha"
              class="form-control"
              type="password"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirmar-senha">Confirmar Senha:</label>
            <input
              v-model="confirmarSenha"
              id="confirmar-senha"
              class="form-control"
              type="password"
              required
            />
          </div>
          <div
            style="
              text-align: center;
              justify-content: center;
              margin-bottom: 10px;
            "
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="termos"
              name="termos"
              required
              style="margin-right: 10px"
            />
            <label for="termos"
              >Eu concordo que li os <a href="#">termos de uso</a>.</label
            >
          </div>
          <button type="submit" class="btn-custom">Criar Conta</button>
        </form>
        <p class="text-center mt-3">
          Já tem uma conta? <router-link to="login">Faça login.</router-link>
        </p>
      </div>
    </div>
    <div v-else>
      <h2>Faça login para entrar</h2>
      <form class="form-container">
        <div class="form-group">
          <router-link to="homeOrientador" style="text-decoration: none"
            ><button class="btn-custom">Login</button></router-link
          >
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

.form-group input {
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

.btn-custom {
  display: block;
  width: 50%; /* Diminui o tamanho do botão */
  padding: 10px;
  background-color: #01400b; /* Cor do botão */
  color: #fff;
  border: none;
  border-radius: 8px; /* Bordas arredondadas */
  cursor: pointer;
  text-align: center;
  margin: 0 auto; /* Centraliza o botão */
}

.btn-custom:hover {
  background-color: #012d08; /* Cor do botão ao passar o mouse */
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
</style>

<!-- <script setup>
//import FooterComp from '@/components/FooterComp.vue';
//import HeaderComp from '@/components/HeaderComp.vue';
//import axios from 'axios';
//import { ref } from 'vue'; // Importa 'ref' para criar variáveis reativas
//import '@/assets/css/global.css'

/* criação de orientadores no front
const orientadores = ref([]);
const nome = ref('');
const prontuario = ref('');
const email = ref('');

// Função para adicionar um orientador
function addOrientador() {
  if (!nome.value.trim() || !prontuario.value.trim() || !email.value.trim()) {
    return; // Se algum campo estiver vazio, a função é interrompida.
  }

  // Adiciona o novo orientador à lista
  orientadores.value.push({
    nome: nome.value,
    prontuario: prontuario.value,
    email: email.value,
  });

  // Limpa os campos de entrada após o cadastro
  nome.value = '';
  prontuario.value = '';
  email.value = '';
}

// Função para remover um orientador da lista
function removeOrientador(index) {
  orientadores.value.splice(index, 1); // Remove o orientador pelo índice.
}
*/

/* async function handleSubmit(event) {
    event.preventDefault();
    try {
        const orientador = {
            nome: nome.value,
            prontuario: prontuario.value,
            email: email.value,
            password: senha.value,
        };
        const response = await axios.post('http://localhost:8082/FRAN/orientadores/signup', orientador);
        console.log(response)
    } catch (error) {
        // Exibe erro se houver falha no cadastro
        console.log('Erro ao cadastrar orientador: ' + (error.response?.data || error.message));
    }

} */
</script> -->

<!-- <template>
    <HeaderComp />
    <main class="conteudo">
        <div>
            <h1>Esta é a página de cadastro dos orientadores.</h1>
            
            <div>
                <div class="divDoFormulario">
                    <form class="formulario" @submit="handleSubmit">
                        <hr /> 
                        
                        <h1 class="tituloFormulario">Cadastrar novo orientador de estágio</h1>
                        <br>
                        
                        <input placeholder="Nome" type="text" v-model="nome" id="nome">
                        <input placeholder="Prontuário" type="text" v-model="prontuario" id="prontuario">
                        <input placeholder="Email" type="email" v-model="email" id="email">
                        <input placeholder="senha" type="senha" v-model="senha" id="senha">
                
                        <button @click="addOrientador" type="submit" class="enviar">Cadastrar</button>
                    </form>
                    <br>
                </div> -->

<!--
                 <div class="divDaLista">
                    <div class="lista" v-for="(orientador, index) in orientadores" :key="index">
                        <span class="orientador__nome">Nome: <strong>{{ orientador.nome }}</strong></span>
                        <p>{{ orientador.prontuario }}</p>
                        <p>{{ orientador.email }}</p>
                        <br><hr /><br>
                        <div>
                            <a href="#" @click.prevent="removeOrientador(index)">Excluir</a>
                        </div>
                    </div>
                    -->
<!-- </div>      
        </div>
    </main>
    <FooterComp />
</template>-->

<!-- <style scoped>
.divDoFormulario{
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.divDaLista{
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formulario{
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff; /* Cor de fundo do formulário */
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.lista{
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff; /* Cor de fundo do formulário */
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.tituloFormulario{
    text-align: center;
}

label{
    align-self: flex-start;
}

input[type="text"], input[type="email"], input[type="password"]{
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
    height: 25px;
    display: block;
}

.enviar{
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    background-color: #33b83a;
    height: 30px;
    width: 90px;
}

.enviar:hover {
    background-color: rgb(0, 255, 0);
    border: 1px solid rgb(0, 255, 0);
    box-shadow: 0 0 10px rgb(0, 255, 0);
}
</style> -->
