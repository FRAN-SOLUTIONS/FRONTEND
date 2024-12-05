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
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
} from 'bootstrap-vue-3'

axios.defaults.withCredentials = true

const orientador = ref(null)
const showModal = ref(false)
const editando = ref(false)
const imagemAleatoria = ref('')
const imagens = [user1, user2, user3, user4, user5, user6, user7, user8, user9]

const atualSenha = ref('')
const novaSenha = ref('')
const confirmarSenha = ref('')
const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const errorMessage = ref('')

const touched = ref({
  atualSenha: false,
  novaSenha: false,
  confirmarSenha: false,
})

const errors = ref({
  atualSenha: false,
  novaSenha: false,
  confirmarSenha: false,
})


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

  if (botaoClicado.innerText === 'Editar') {
    botaoClicado.innerText = 'Salvar';
  } else {
    botaoClicado.innerText = 'Editar';
  }
}

function showingModal() {
  if (showModal.value) {
    errors.value.atualSenha = false
    errors.value.novaSenha = false
    errors.value.confirmarSenha = false
    touched.value.atualSenha = false
    touched.value.novaSenha = false
    touched.value.confirmarSenha = false
    errorMessage.value = ''
  }
  showModal.value = !showModal.value
}

function handleBlur(field) {
  touched.value[field] = true
  if (field === 'atualSenha') {
    errors.value.atualSenha = !senhaRegex.test(atualSenha.value)
  } else if(field === 'novaSenha') {
    errors.value.novaSenha = !senhaRegex.test(novaSenha.value)
  } if (field === 'confirmarSenha') {
    errors.value.confirmarSenha = novaSenha.value !== confirmarSenha.value
  }
}

function validateFormPassword() {
  errors.value = {
    atualSenha: !senhaRegex.test(atualSenha.value),
    novaSenha: !senhaRegex.test(novaSenha.value),
    confirmarSenha: novaSenha.value !== confirmarSenha.value,
  }

  return Object.values(errors.value).some(error => error)
}

async function handleSubmitPassword() {
  if (!atualSenha.value || !novaSenha.value || !confirmarSenha.value)
    return (errorMessage.value = 'Preencha Todos os Campos!')
  else if (validateFormPassword()) return

  try {
    const submitSenha = {
      senhaAtual: atualSenha.value,
      novaSenha: novaSenha.value
    }
    const response = await axios.put(
      'http://localhost:8082/FRAN/orientadores/editPassword',
      submitSenha,
    )

    console.log(response)
    showingModal();

  } catch (error) {
    errorMessage.value = error.response?.data || error.message
    console.log('Erro ao atualizar a senha: ' + (error.response?.data || error.message))
  }
}

</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo mt-0">
      <!-- <FileNavComp /> -->
      <div class="container vh-100 text-center">
        <div class="col d-flex justify-content-center align-items-center h-100">
          <div class="card flex-row justify-content-between w-75">
            <!-- Imagem aleatória -->
            <img
              :src="imagemAleatoria"
              alt="Imagem do orientador"
              height="30%"
              width="30%"
              class="my-5"
            />
            <div class="vr p-0"></div>

            <form>
            <div class="d-flex flex-column justify-content-center">
              <!-- Inputs -->
              <div id="formInputs">
                <!-- Nome -->
                <div
                  v-if="orientador"
                  class="row g-3 align-items-center justify-content-between mb-3"
                >
                  <div class="col-auto">
                    <label for="inputNome" class="col-form-label">
                      Nome:
                    </label>
                  </div>
                  <div class="col-auto input-group w-75">
                    <input
                      type="text"
                      v-model="orientador.nome"
                      class="form-control"
                      id="inputNome"
                      on
                      disabled
                    />
                    <BotaoComp
                      @click="editarInput"
                      titulo="Editar"
                      tamanho="p"
                      type="button"
                    />
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
                    <BotaoComp
                      @click="editarInput"
                      titulo="Editar"
                      tamanho="p"
                      type="button"
                    />
                  </div>
                </div>

                <!-- Email -->
                <div
                  v-if="orientador"
                  class="row g-3 align-items-center justify-content-between mb-3"
                >
                  <div class="col-auto">
                    <label for="inputEmail" class="col-form-label">
                      E-mail:
                    </label>
                  </div>
                  <div class="col-auto input-group w-75">
                    <input
                      type="email"
                      v-model="orientador.email"
                      class="form-control"
                      id="inputEmail"
                      disabled
                    />
                    <BotaoComp
                      @click="editarInput"
                      titulo="Editar"
                      tamanho="p"
                      type="button"
                    />
                  </div>
                </div>

                <!-- Senha -->
                <div
                  v-if="orientador"
                  class="row g-3 align-items-center justify-content-between mb-5"
                >
                  <div class="col-auto">
                    <label for="inputSenha" class="col-form-label">
                      Senha:
                    </label>
                  </div>
                  <div class="col-auto input-group w-75">
                    <input
                      type="password"
                      placeholder="*********"
                      class="form-control"
                      id="inputSenha"
                      disabled
                    />
                    <BotaoComp
                      @click="showingModal"
                      titulo="Editar"
                      tamanho="p"
                      type="button"
                    />
                  </div>
                </div>
              </div>

              <!-- Botão -->
              <div>
                <BotaoComp
                  @click="salvarAlteracoes"
                  titulo="Salvar alterações"
                  tamanho="g"
                  type="submit"
                />
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <FooterComp />

    <!-- Modal de Senha -->
    <div
      v-if="showModal"
      v-show="showModal"
      class="modal-overlay"
      @click.self="showingModal"
    >
      <div class="form-container">
        <BForm @submit.prevent="handleSubmitPassword">
          <BFormGroup label="Senha Atual:">
            <BFormInput
              v-model="atualSenha"
              type="password"
              :state="touched.atualSenha ? !errors.atualSenha : null"
              @blur="handleBlur('atualSenha')"
            />
            <BFormInvalidFeedback class="text-center" v-if="errors.atualSenha"
            >Senha deve ter pelo menos 8 caracteres, incluindo letras e
              números.
            </BFormInvalidFeedback>
          </BFormGroup>
          <BFormGroup label="Nova Senha:">
            <BFormInput
              v-model="novaSenha"
              type="password"
              :state="touched.novaSenha ? !errors.novaSenha : null"
              @blur="handleBlur('novaSenha')"
            />
            <BFormInvalidFeedback class="text-center" v-if="errors.novaSenha"
              >Senha deve ter pelo menos 8 caracteres, incluindo letras e
              números.
            </BFormInvalidFeedback>
          </BFormGroup>
          <BFormGroup label="Confirmar Senha:">
            <BFormInput
              v-model="confirmarSenha"
              type="password"
              :state="touched.confirmarSenha ? !errors.confirmarSenha : null"
              @blur="handleBlur('confirmarSenha')"
            />
            <BFormInvalidFeedback
              class="text-center"
              v-if="errors.confirmarSenha"
              >As senhas não coincidem.
            </BFormInvalidFeedback>
          </BFormGroup>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <BotaoComp titulo="Salvar Senha" type="submit" />
        </BForm>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
