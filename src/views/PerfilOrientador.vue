<script setup>
import { ref, onMounted } from 'vue'
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
import FileNavComp from '@/components/FileNavComp.vue'
import BotaoComp from '@/components/BotaoComp.vue'
import axios from 'axios'
axios.defaults.withCredentials = true
import '@/assets/css/global.css'

const orientador = ref(null)
const editando = ref(false)
const imagemAleatoria = ref('')

// Importando as imagens
import user1 from '@/assets/images/user1.png'
import user2 from '@/assets/images/user2.png'
import user3 from '@/assets/images/user3.png'
import user4 from '@/assets/images/user4.png'
import user5 from '@/assets/images/user5.png'
import user6 from '@/assets/images/user6.png'
import user7 from '@/assets/images/user7.png'
import user8 from '@/assets/images/user8.png'
import user9 from '@/assets/images/user9.png'

// Array de imagens
const imagens = [user1, user2, user3, user4, user5, user6, user7, user8, user9]

// Função para selecionar uma imagem aleatória
const escolherImagemAleatoria = () => {
  const indice = Math.floor(Math.random() * imagens.length)
  imagemAleatoria.value = imagens[indice]
}

onMounted(async () => {
  try {
    const response = await axios.get(
      'http://localhost:8082/FRAN/orientadores/me'
    )
    orientador.value = response.data

    escolherImagemAleatoria()
  } catch (error) {
    console.error('Erro ao buscar orientador:', error)
  }
})

// Função para salvar as alterações
const salvarAlteracoes = async () => {
  try {
    const response = await axios.put(
      `http://localhost:8082/FRAN/orientadores/${orientador.value.id}`,
      orientador.value
    )
    console.log('Dados atualizados:', response.data)
    editando.value = false // Sair do modo de edição
  } catch (error) {
    console.error('Erro ao salvar alterações:', error)
  }
}

// Função para alternar o modo de edição
const editarDados = () => {
  editando.value = !editando.value
}
</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo mt-0">
      <FileNavComp />
      <div class="container text-center">
        <div class="row">
          <div class="col d-flex flex-column align-items-center">
            <!-- Imagem aleatória -->
            <img
              :src="imagemAleatoria"
              alt="Imagem do orientador"
              width="20%"
              class="mb-3 mt-4"
            />

            <!-- Nome -->
            <div v-if="editando">
              <input
                type="text"
                v-model="orientador.nome"
                placeholder="Nome"
                class="form-control mb-3"
              />
            </div>
            <h2 v-else class="mb-5">
              {{ orientador ? orientador.nome : 'Carregando...' }}
            </h2>

            <!-- Prontuário -->
            <div v-if="editando">
              <input
                type="text"
                v-model="orientador.prontuario"
                placeholder="Prontuário"
                class="form-control mb-3"
              />
            </div>
            <h4 v-else>
              {{ orientador ? orientador.prontuario : 'Carregando...' }}
            </h4>

            <!-- Email -->
            <div v-if="editando">
              <input
                type="email"
                v-model="orientador.email"
                placeholder="Email"
                class="form-control mb-3"
              />
            </div>
            <h4 v-else>
              {{ orientador ? orientador.email : 'Carregando...' }}
            </h4>

            <!-- Telefone -->
            <div v-if="editando">
              <input
                type="text"
                v-model="orientador.telefone"
                placeholder="Telefone"
                class="form-control mb-3"
              />
            </div>
            <h4 v-else class="mb-5">
              {{ orientador ? orientador.telefone : 'Carregando...' }}
            </h4>

            <!-- Botões -->
            <div>
              <BotaoComp
                v-if="!editando"
                @click="editarDados"
                titulo="Editar dados cadastrados"
                tamanho="g"
                class="mb-3"
              />
              <BotaoComp
                v-if="editando"
                @click="salvarAlteracoes"
                titulo="Salvar alterações"
                tamanho="g"
                class="mb-3"
              />
              <BotaoComp
                v-if="editando"
                @click="editarDados"
                titulo="Cancelar"
                tamanho="g"
                class="mb-3"
              />
            </div>
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
