<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
//import axios from 'axios';
//import { ref } from 'vue'; // Importa 'ref' para criar variáveis reativas
import '@/assets/css/global.css'

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
</script>

<template>
    <HeaderComp />
    <main class="conteudo">
        <div>
            <h1>Esta é a página de cadastro dos orientadores.</h1>
            
            <!-- <div>
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
                <!-- </div>      --> 
        </div>
    </main>
    <FooterComp />
</template>



<style scoped>
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
</style>