<script setup>
import HeaderLogado from '@/components/HeaderLogado.vue';
import FooterComp from '@/components/FooterComp.vue';
/* import FileNavComp from '@/components/FileNavComp.vue'; */

import { ref } from 'vue'

/* const dataHoje = ref(new Date().toLocaleDateString('pt-BR')) */
//const dataHoje = ref(new Date());

//ESSA QUANTIDADE DE VETORES EXAGERADAS É APENAS PARA SIMULAR OS RELATÓRIOS DOS ALUNOS JÁ CADASTRADOS, DEVE SER DESCARTADA ASSIM QUE O PROCESSO DE ALERTAS ESTIVER FUNCIONANDO.

const nome = ref([]);
const email = ref([]);
const prontuario = ref([]);
const nomeEmpresa = ref([]);
const tipoAlerta = ref([]);
const msgAlerta = ref([]);
const vencimento = ref([]);

vencimento.value.push(new Date('2024-10-30'));
vencimento.value.push(new Date('2024-11-30'));
vencimento.value.push(new Date('2024-11-30'));
vencimento.value.push(new Date('2024-11-30'));

nome.value.push('Maria');
email.value.push('maria@email.com');
prontuario.value.push('SP123456');
nomeEmpresa.value.push('Google');
tipoAlerta.value.push('atrasado');
msgAlerta.value.push('O relatório está atrasado');

nome.value.push('João');
email.value.push('joao@email.com');
prontuario.value.push('SP123457');
nomeEmpresa.value.push('Microsoft');
tipoAlerta.value.push('atrasado');
msgAlerta.value.push('O relatório deve ser enviado');

nome.value.push('Gustavo');
email.value.push('gustavo@email.com');
prontuario.value.push('SP123458');
nomeEmpresa.value.push('Kiman');
tipoAlerta.value.push('entregue');
msgAlerta.value.push('O relatório foi entregue');

nome.value.push('Luiza');
email.value.push('luiza@email.com');
prontuario.value.push('SP123459');
nomeEmpresa.value.push('IFSP');
tipoAlerta.value.push('a entregar');
msgAlerta.value.push('O relatório deve ser enviado');

</script>

<template>
    <HeaderLogado />
    <main class="conteudo">
        <!-- <FileNavComp /> -->

        <div class="container">
            <div class="row row-cols-3 row-cols-sm-2 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                <b-card v-for="(aluno, index) in nome" :key="index" class="col card">
                    <h2>{{ nome[index] }}</h2>
                    
                    <b-card-text v-if="tipoAlerta[index] === 'atrasado'" :style="{ color: 'red' }">
                        
                        <p><strong>{{ tipoAlerta[index] }} - {{ msgAlerta[index] }}</strong></p>
                        <p><strong>Vencimento: {{ vencimento[index].toLocaleDateString('pt-BR') }} </strong></p>
                    </b-card-text>
                    <b-card-text v-else-if="tipoAlerta[index] === 'a entregar'" :style="{ color: 'orange' }">
                        <p><strong>{{ tipoAlerta[index] }} - {{ msgAlerta[index] }}</strong></p>
                        <p><strong>Vencimento: {{ vencimento[index].toLocaleDateString('pt-BR') }} </strong></p>
                    </b-card-text>
                    <b-card-text v-else :style="{ color: 'blue' }">
                        <p><strong>{{ tipoAlerta[index] }} - {{ msgAlerta[index] }}</strong></p>
                        <p><strong>Vencimento: {{ vencimento[index].toLocaleDateString('pt-BR') }} </strong></p>
                    </b-card-text>
                    <hr>
                    <b-card-text>
                        <p style="margin: 0;"><strong>Email:</strong> {{ email[index] }}</p>
                        <p style="margin: 0;"><strong>Prontuário:</strong> {{ prontuario[index] }}</p>
                        <p style="margin: 0;"><strong>Empresa:</strong> {{ nomeEmpresa[index] }}</p>
                    </b-card-text>

                    <b-link to="404" class="card-link" style="color: #01400b;">
                        <strong>Mais informações</strong>
                    </b-link>
                </b-card>
            </div>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
.card {
    color: #01400b;
    border: 1px solid #01400b;
    padding: 10px;
    margin:20px;
    border-radius: 5px;
    width: 35%;
}
</style>