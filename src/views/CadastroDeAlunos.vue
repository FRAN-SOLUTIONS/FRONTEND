<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';

/* document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    let nomeCompleto = document.getElementById('nome-completo').value;
    let prontuario = document.getElementById('prontuario').value;
    let email = document.getElementById('email').value;
    let curso = document.getElementById('curso').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmar-senha').value;

    // Validações
    if (nomeCompleto === '' || prontuario === '' || email === '' || curso === '' || senha === '' || confirmarSenha === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    alert('Formulário enviado com sucesso!');
}); */

import { ref } from 'vue';

const nomeCompleto = ref('');
const prontuario = ref('');
const telefone = ref(''); 
const email = ref('');
const curso = ref('');
const senha = ref('');
const confirmarSenha = ref('');

function handleSubmit(event) {
  event.preventDefault();
  if (
    !nomeCompleto.value ||
    !prontuario.value ||
    !email.value ||
    !curso.value ||
    !senha.value ||
    !confirmarSenha.value
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem.');
    return;
  }
  alert('Formulário enviado com sucesso!');
}
</script>

<template>

    <HeaderComp />

    <main>
        <h2 class="text-center mt-4">Primeira vez aqui? Cadastre-se:</h2>
        
        <div class="form-container">
            <form id="cadastroForm" @submit="handleSubmit">
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="nome-completo">Nome Completo:</label>
                        <input v-model="nomeCompleto" id="nome-completo"  class="form-control" type="text"  required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="prontuario">Prontuário:</label>
                        <input v-model="prontuario" id="prontuario" class="form-control" type="text" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="telefone">Telefone (opcional):</label>
                        <input v-model="telefone" id="telefone" class="form-control" type="tel" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input v-model="email" id="email" class="form-control" type="email" required />
                </div>
                <div class="form-group">
                    <label for="curso">Curso:</label>
                    <input v-model="curso" id="curso" class="form-control" type="text" required />
                </div>
                <div class="form-group">
                    <label for="senha">Senha:</label>
                    <input v-model="senha" id="senha" class="form-control" type="password" required />
                </div>
                <div class="form-group">
                    <label for="confirmar-senha">Confirmar Senha:</label>
                    <input v-model="confirmarSenha" id="confirmar-senha" class="form-control" type="password" required />
                </div>
                <!-- <div class="form-check"> -->
                <div style="text-align: center; justify-content: center; margin-bottom: 10px;">
                    <input type="checkbox" class="form-check-input" id="termos" name="termos" required style="margin-right: 10px;">
                    <label for="termos">Eu concordo que li os <a href="#">termos de uso</a>.</label>
                </div>
                <!-- <button type="submit" class="btn-custom">Criar Conta</button> -->
                <button type="submit" class="btn-custom">Criar Conta</button>
            </form>            
            <p class="text-center mt-3">Já tem uma conta? <router-link to="login">Faça login.</router-link></p>
        </div>
    </main>
    
    <FooterComp />
</template>

<style scoped>
h2{
    color: #01400B; /* Define a cor */
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
    background-color: #EAEBEE; /* Cor de fundo das caixas de formulário */
}

.form-check {
    text-align: center; /* Centraliza o checkbox e o texto */
    margin-bottom: 15px;
}

.btn-custom {
    display: block;
    width: 50%; /* Diminui o tamanho do botão */
    padding: 10px;
    background-color: #01400B; /* Cor do botão */
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