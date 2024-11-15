<script setup>
import HeaderLogado from '@/components/HeaderLogado.vue';
import FooterComp from '@/components/FooterComp.vue';
import FileNavComp from '@/components/FileNavComp.vue';

import { ref } from 'vue'

/* const dataHoje = ref(new Date().toLocaleDateString('pt-BR')) */
//const dataHoje = ref(new Date());

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
tipoAlerta.value.push('a entregar');
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

/* const nome = ref([])
const email = ref([])
const prontuario = ref([])
const nomeEmpresa = ref([])
const tipoAlerta = ref([])
const msgAlerta = ref([])
const vencimento = ref([])
//const dataHoje = ref(new Date().toLocaleDateString('pt-BR'))

vencimento.value[0] = new Date('2024-10-30').toLocaleDateString('pt-BR')
vencimento.value[1] = new Date('2024-11-30').toLocaleDateString('pt-BR')

nome.value[0] = 'Maria'
email.value[0] = 'maria@email.com'
prontuario.value[0] = 'SP123456'
nomeEmpresa.value[0] = 'Google'
tipoAlerta.value[0] = 'atrasado'
msgAlerta.value[0] = 'o relatorio esta atrasado'

nome.value[0] = 'João'
email.value[0] = 'joao@email.com'
prontuario.value[0] = 'SP123456'
nomeEmpresa.value[0] = 'Microsoft'
tipoAlerta.value[0] = 'atrasado'
msgAlerta.value[0] = 'o relatorio esta atrasado'

nome.value[0] = 'Gustavo'
email.value[0] = 'gustavo@email.com'
prontuario.value[0] = 'SP123456'
nomeEmpresa.value[0] = 'kiman'
tipoAlerta.value[0] = 'a entregar'
msgAlerta.value[0] = 'o relatorio deve ser enviado'

nome.value[0] = 'luiza'
email.value[0] = 'luiza@email.com'
prontuario.value[0] = 'SP123456'
nomeEmpresa.value[0] = 'IFSP'
tipoAlerta.value[0] = 'entregue'
msgAlerta.value[0] = 'o foi entregue'

nome.value[0] = 'Maria'
email.value[0] = 'maria@email.com'
prontuario.value[0] = 'SP123456'
nomeEmpresa.value[0] = 'Google'
tipoAlerta.value[0] = 'a entregar'
msgAlerta.value[0] = 'o relatorio deve ser enviado'

nome.value[0] = 'Joao'
email.value[0] = 'joao@email.com'
prontuario.value[0] = 'SP123456'
nomeEmpresa.value[0] = 'Google'
tipoAlerta.value[0] = 'a entregar' 
msgAlerta.value[0] = 'o relatorio deve ser enviado'*/
</script>

<template>
    <HeaderLogado />
    <main class="conteudo">
        <FileNavComp />

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