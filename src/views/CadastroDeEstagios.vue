<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import { useAuth } from '@/services/useAuth';
import HeaderLogado from '@/components/HeaderLogado.vue';
import BotaoComp from '@/components/BotaoComp.vue'

import axios from 'axios'

import { ref } from 'vue'

import { useRouter } from 'vue-router';
const router = useRouter();

const { isLoggedIn } = useAuth();

const obrigatorio = ref('sim')
const cargaDiaria = ref('')
const dataInicio = ref('')
const dataTermino = ref('')
const prontuarioAluno = ref('')
const prontuarioCoordenador = ref('')

axios.defaults.withCredentials = true

// Função para envio do formulário com os novos campos
async function handleSubmit(event) {
  event.preventDefault()

  // Validação dos campos antes do envio
  if (
    !obrigatorio.value ||
    !cargaDiaria.value ||
    !dataInicio.value ||
    !dataTermino.value ||
    !prontuarioAluno.value
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  if(cargaDiaria.value <3){
    alert('A carga diária deve ser maior ou igual a 3')
    return
  }

  try {
    const estagio = {
      obrigatorio: obrigatorio.value === 'sim',
      cargaDiaria: parseInt(cargaDiaria.value),
      dataInicio: dataInicio.value,
      dataTermino: dataTermino.value,
      prontuarioAluno: prontuarioAluno.value,
      prontuarioCoordenador: prontuarioCoordenador.value,
    }

    const response = await axios.post(
      'http://localhost:8082/FRAN/estagios/create',
      estagio
    )
    console.log(response)
    alert('Estágio cadastrado com sucesso!')
  } catch (error) {
    console.error('Erro ao cadastrar estágio:', error.response?.data || error.message)
    alert('Erro ao cadastrar estágio.')
  }
  router.push('/homeOrientador')
}
</script>

<template>
  <component :is="isLoggedIn ? HeaderLogado : HeaderComp  " />

  <main class="conteudo mb-5">
    <h2 class="text-center mt-4">Cadastro de Estágio</h2>

    <div class="form-container">
      <form @submit="handleSubmit">
        <div class="form-group">
          <label for="obrigatorio">Estágio Obrigatório?</label>
          <select v-model="obrigatorio" id="obrigatorio" class="form-control" required>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        <div class="form-group">
          <label for="cargaDiaria">Carga Diária (em horas):</label>
          <input v-model="cargaDiaria" id="cargaDiaria" class="form-control" type="number" required />
        </div>

        <div class="form-group">
          <label for="dataInicio">Data de Início:</label>
          <input v-model="dataInicio" id="dataInicio" class="form-control" type="date" required />
        </div>

        <div class="form-group">
          <label for="dataTermino">Data de Término:</label>
          <input v-model="dataTermino" id="dataTermino" class="form-control" type="date" required />
        </div>

        <div class="form-group">
          <label for="prontuarioAluno">Prontuário do Aluno:</label>
          <input v-model="prontuarioAluno" id="prontuarioAluno" class="form-control" type="text" required />
        </div>  
        <!-- <button type="submit" class="btn-custom mt-2">Cadastrar Estágio</button> -->

        <BotaoComp titulo="Cadastrar Estágio" tamanho="g" type="submit"/>
        
      </form>
    </div>
  </main>
  <FooterComp />
</template>

<style scoped>
h2 {
  color: #01400b;
  text-align: center;
  margin-top: 1.5rem;
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

.form-group input,
.form-group select {
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
