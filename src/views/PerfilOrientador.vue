<script setup>
import { onMounted, ref } from 'vue'
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
/* import FileNavComp from '@/components/FileNavComp.vue' */
import BotaoComp from '@/components/BotaoComp.vue'

import axios from 'axios'

import user1 from '@/assets/images/user1.png'
import user2 from '@/assets/images/user2.png'
import user3 from '@/assets/images/user3.png'
import user4 from '@/assets/images/user4.png'
import user5 from '@/assets/images/user5.png'
import user6 from '@/assets/images/user6.png'
import user7 from '@/assets/images/user7.png'
import user8 from '@/assets/images/user8.png'
import user9 from '@/assets/images/user9.png'

axios.defaults.withCredentials = true

const orientador = ref(null)
const editando = ref(false)
const imagemAleatoria = ref('')
const errorMessage = ref('')

const imagens = [user1, user2, user3, user4, user5, user6, user7, user8, user9]

// Função para selecionar uma imagem aleatória
const escolherImagemAleatoria = () => {
  const indice = Math.floor(Math.random() * imagens.length)
  imagemAleatoria.value = imagens[indice]
}

onMounted(async () => {
  try {
    const response = await axios.get(
      'http://localhost:8082/FRAN/orientadores/me',
    )
    orientador.value = response.data

    escolherImagemAleatoria()
  } catch (error) {
    errorMessage.value = error.response?.data?.message
    console.error('Erro ao buscar orientador:', error)
  }
})

const salvarAlteracoes = async () => {
  try {
    console.log(orientador.value)
    const response = await axios.put(
      'http://localhost:8082/FRAN/orientadores/edit',
      orientador.value,
    )

    console.log('Alterações salvas com sucesso:', response.data)
    editando.value = false

    orientador.value = response.data
  } catch (error) {
    errorMessage.value = error.response?.data || error.message
    console.error('Erro ao salvar alterações:', error)
  }
}

// Função para alternar o modo de edição dos inputs
const editarInput = event => {
  const botaoClicado = event.target
  if(botaoClicado.classList.contains('btn')){
    const input = botaoClicado.previousElementSibling
    input.disabled = !input.disabled
  } else{
    const input = botaoClicado.parentElement.previousElementSibling
    input.disabled = !input.disabled
  }
}
</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo mt-0">
      <!-- <FileNavComp /> -->
      <div class="container text-center">
        <div class="col d-flex flex-column align-items-center">
          <!-- Imagem aleatória -->
          <img
            :src="imagemAleatoria"
            alt="Imagem do orientador"
            width="20%"
            class="mb-3 mt-4"
          />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <!-- Inputs -->
          <div>
            <!-- Nome -->
            <div
              v-if="orientador"
              class="row g-3 align-items-center justify-content-between mb-3"
            >
              <div class="col-auto">
                <label for="inputNome" class="col-form-label"> Nome: </label>
              </div>
              <div class="col-auto input-group w-75">
                <input
                  type="text"
                  v-model="orientador.nome"
                  class="form-control"
                  id="inputNome"
                  disabled
                />
                <BotaoComp @click="editarInput" titulo="Editar" tamanho="p" />
              </div>
            </div>

            <!-- Prontuário -->
            <div
              v-if="orientador"
              class="row g-3 align-items-center justify-content-between mb-3"
            >
              <div class="col-auto">
                <label for="inputProntuario" class="col-form-label">
                  Prontuário:
                </label>
              </div>
              <div class="col-auto input-group w-75">
                <input
                  type="text"
                  v-model="orientador.prontuario"
                  class="form-control"
                  id="inputProntuario"
                  disabled
                />
                <BotaoComp @click="editarInput" titulo="Editar" tamanho="p" />
              </div>
            </div>

            <!-- Email -->
            <div
              v-if="orientador"
              class="row g-3 align-items-center justify-content-between mb-3"
            >
              <div class="col-auto">
                <label for="inputEmail" class="col-form-label"> E-mail: </label>
              </div>
              <div class="col-auto input-group w-75">
                <input
                  type="email"
                  v-model="orientador.email"
                  class="form-control"
                  id="inputEmail"
                  disabled
                />
                <BotaoComp @click="editarInput" titulo="Editar" tamanho="p" />
              </div>
            </div>

            <!-- Senha -->
            <div
              v-if="orientador"
              class="row g-3 align-items-center justify-content-between mb-3"
            >
              <div class="col-auto">
                <label for="inputSenha" class="col-form-label"> Senha: </label>
              </div>
              <div class="col-auto input-group w-75">
                <input
                  type="password"
                  placeholder="*********"
                  class="form-control"
                  id="inputSenha"
                  disabled
                />
                <BotaoComp titulo="Editar" tamanho="p" />
              </div>
            </div>
          </div>

          <!-- Botões -->
          <div>
            <BotaoComp
              @click="salvarAlteracoes"
              titulo="Salvar alterações"
              tamanho="g"
              class="mb-3"
            />
          </div>
        </div>
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<style scoped>
input {
  width: 300px;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>

<!-- <script setup>
import { ref, onMounted } from 'vue';
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
import FileNavComp from '@/components/FileNavComp.vue'
import BotaoComp from '@/components/BotaoComp.vue';
import axios from 'axios';
axios.defaults.withCredentials = true;
import '@/assets/css/global.css'

const orientador = ref(null);
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8082/FRAN/orientadores/me');
    orientador.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar orientador:", error);
  }
});

</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo mt-0">
      <FileNavComp />
      <div
        class="container text-center"
      >
        <div class="row">
          <div
            class="col d-flex flex-column align-items-center"
          >
            <img
              src="@/assets/images/user.png"
              alt=""
              width="20%"
              class="mt-2"
            />
            <h2 class="mb-5">{{ orientador ? orientador.nome : "Carregando..." }}</h2>
            <h4>{{ orientador ? orientador.prontuario : "Carregando..." }}</h4>
            <h4>{{ orientador ? orientador.email : "Carregando..." }}</h4>


            <h4 class="mb-5">{{ orientador ? orientador.telefone : "Carregando..." }}</h4>

            <BotaoComp titulo="Editar dados cadastrados" tamanho="g"/>
          </div>
        </div>
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<style scoped></style>
 -->
