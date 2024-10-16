<script setup>
//import FooterComp from '@/components/FooterComp.vue';
//import HeaderComp from '@/components/HeaderComp.vue';

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
    <header class="bg-custom text-white py-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img src="../assets/images/F.png" alt="Logo" class="header-logo">
            <h1 class="ml-3">FRANSOLUTIONS</h1>
        </div>
        <div>
            <a href="#" class="btn btn-success mr-2" style="background-color: #01400B; border-color: #EAEBEE;">Página Inicial</a>
            <a href="#" class="btn btn-success" style="background-color: #01400B; border-color: #EAEBEE;">Login</a>
        </div>
    </header>

    <div class="container">
        <p class="lead text-center mt-4 custom-lead">Primeira vez aqui? Cadastre-se:</p>
        <div class="form-container">
            <form id="cadastroForm" @submit="handleSubmit">
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="nome-completo">Nome Completo:</label>
                        <!-- <input type="text" class="form-control" id="nome-completo" name="nome-completo" required> -->
                        <input v-model="nomeCompleto" id="nome-completo"  class="form-control" type="text" placeholder="Nome Completo" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="prontuario">Prontuário:</label>
                        <!-- <input type="text" class="form-control" id="prontuario" name="prontuario" required> -->
                        <input v-model="prontuario" id="prontuario" class="form-control" type="text" placeholder="Prontuário" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="telefone">Telefone (opcional):</label>
                        <!-- <input type="tel" class="form-control" id="telefone" name="telefone"> -->
                        <input v-model="telefone" id="telefone" class="form-control" type="tel" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <!-- <input type="email" class="form-control" id="email" name="email" required> -->
                    <input v-model="email" id="email" class="form-control" type="email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label for="curso">Curso:</label>
                    <!-- <input type="text" class="form-control" id="curso" name="curso" required> -->
                    <input v-model="curso" id="curso" class="form-control" type="text" placeholder="Curso" required />
                </div>
                <div class="form-group">
                    <label for="senha">Senha:</label>
                    <!-- <input type="password" class="form-control" id="senha" name="senha" required> -->
                    <input v-model="senha" id="senha" class="form-control" type="password" placeholder="Senha" required />
                </div>
                <div class="form-group">
                    <label for="confirmar-senha">Confirmar Senha:</label>
                    <!-- <input type="password" class="form-control" id="confirmar-senha" name="confirmar-senha" required> -->
                    <input v-model="confirmarSenha" id="confirmar-senha" class="form-control" type="password" placeholder="Confirmar Senha" required />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="termos" name="termos" required>
                    <label class="form-check-label" for="termos">Eu concordo que li os termos de uso</label>
                </div>
                <!-- <button type="submit" class="btn-custom">Criar Conta</button> -->
                <button type="submit" class="btn-custom">Criar Conta</button>
            </form>            
            <p class="text-center mt-3">Já tem uma conta? <a href="#">Faça login</a></p>
        </div>
    </div>
    <footer class="bg-custom text-white text-center py-3 mt-5">
        <p>© 2024 Seu Site. Todos os direitos reservados.</p>
    </footer>
</template>

<!-- 
<template>
    <HeaderComp />
    <main class="containerDaPagina">
        <div class="conteudoDaPagina">
            <h1>Esta é a página de cadastro dos alunos.</h1>

            <form>
                <h1 style="text-align: center;">Cadastro</h1>
                <br>
                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required style="width: 250px;">
                    <br>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required style="width: 246px;">
                    <br>
                    <label for="rg">RG:</label>
                    <input type="text" id="rg" name="rg" required style="width: 150px;">
                    <br>
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required style="width: 145px;">
                    <br>
                    <label for="cel">Celular:</label>
                    <input type="tel" id="cel" name="cel" required style="width: 150px;">
                    <br>
                    <label for="fone">Telefone:</label>
                    <input type="tel" id="fone" name="fone" style="width: 142px;">
                    <br>
                    <label for="dataNascimento">Data de Nascimento:</label>
                    <input type="date" id="dataNascimento" name="dataNascimento" required>
                    <br>
                    <label for="deficiencia">Portador de Deficiência:</label>
                    <select id="deficiencia" name="deficiencia" required>
                        <option value="não">Não</option>
                        <option value="sim">Sim</option>
                    </select>
                </fieldset>
                <br>
                <fieldset>
                    <legend>Dados do curso</legend>

                    <label for="curso">Curso:</label>
                    <input type="text" id="curso" name="curso" required style="width: 250px;">
                    <br>
                    <label for="matricula">Matrícula:</label>
                    <input type="text" id="matricula" name="matricula" required style="width: 100px;">
                    <br>
                    <label for="semestre">Semestre/Ano:</label>
                    <input type="text" id="semestre" name="semestre" required style="width: 70px;">
                </fieldset>
                <br>
                <fieldset>
                    <legend>Endereço</legend>

                    <label for="endereco">Rua:</label>
                    <input type="text" id="endereco" name="endereco" required style="width: 270px;">
                    <br>
                    <label for="numero">Número:</label>
                    <input type="text" id="numero" name="numero" required style="width: 60px;">

                    <label for="complemento">Compl:</label>
                    <input type="text" id="compl" name="compl" style="width: 100px;">
                    <br>
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" required style="width: 100px;">
                    <br>
                    <label for="bairro">Bairro:</label>
                    <input type="text" id="bairro" name="bairro" required style="width: 180px;">
                    <br>
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required style="width: 180px;">
                    <br>
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required style="width: 90px;">
                        <option value="">Selecione</option>
                        <option value="AC">Acre (AC)</option>
                        <option value="AL">Alagoas (AL)</option>
                        <option value="AP">Amapá (AP)</option>
                        <option value="AM">Amazonas (AM)</option>
                        <option value="BA">Bahia (BA)</option>
                        <option value="CE">Ceará (CE)</option>
                        <option value="DF">Distrito Federal (DF)</option>
                        <option value="ES">Espírito Santo (ES)</option>
                        <option value="GO">Goiás (GO)</option>
                        <option value="MA">Maranhão (MA)</option>
                        <option value="MT">Mato Grosso (MT)</option>
                        <option value="MS">Mato Grosso do Sul (MS)</option>
                        <option value="MG">Minas Gerais (MG)</option>
                        <option value="PA">Pará (PA)</option>
                        <option value="PB">Paraíba (PB)</option>
                        <option value="PR">Paraná (PR)</option>
                        <option value="PE">Pernambuco (PE)</option>
                        <option value="PI">Piauí (PI)</option>
                        <option value="RJ">Rio de Janeiro (RJ)</option>
                        <option value="RN">Rio Grande do Norte (RN)</option>
                        <option value="RS">Rio Grande do Sul (RS)</option>
                        <option value="RO">Rondônia (RO)</option>
                        <option value="RR">Roraima (RR)</option>
                        <option value="SC">Santa Catarina (SC)</option>
                        <option value="SP">São Paulo (SP)</option>
                        <option value="SE">Sergipe (SE)</option>
                        <option value="TO">Tocantins (TO)</option>
                    </select>
                </fieldset>
                
                <br>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </main>
    <FooterComp />
</template> -->

<style scoped>
body {
    background-color: #F2F2F2;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
}

.bg-custom {
    background-color: #01400B;
    height: 100px; /* Ajuste a altura conforme necessário */
}

.custom-lead {
    font-size: 1.5rem; /* Aumenta o tamanho da fonte */
    color: #188C29; /* Define a cor */
}

header {
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.header-logo {
    height: 80px; /* Ajuste a altura da imagem conforme necessário */
    margin-right: 20px;
}

header h1 {
    margin: 0;
    line-height: 100px; /* Alinha o texto verticalmente */
}

.container {
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

.form-check-input {
    margin-left: -1.25rem; /* Ajusta a posição do checkbox */
}

.form-check-label {
    margin-left: 10px; /* Adiciona espaço entre o checkbox e o texto */
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


.custom-lead {
    font-size: 1.5rem; /* Aumenta o tamanho da fonte */
    color: #01400B; /* Define a cor */
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #EAEBEE; /* Cor de fundo das caixas de formulário */
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

/* Estilo atualizado para o footer */
footer {
    background-color: #01400B; /* Cor verde escolhida */
    color: #ffffff; /* Cor do texto */
    text-align: center;
    padding: 1rem 0;
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