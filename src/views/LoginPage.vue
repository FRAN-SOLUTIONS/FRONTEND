<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import '../assets/css/global.css'
</script>

<template>
    <HeaderComp />

    <main>
        <div class="container">
            <p class="lead mt-4 custom-lead">Login</p>
            <form class="formulario form-container">

                <!-- <h1 class="tituloFormulario" style="background-color: #fff;">Login</h1>
                <br> -->
                <label>Prontuário:</label>
                <input type="text" class="form-control">

                <label>E-mail:</label>
                <input type="email" class="form-control">

                <label>Senha:</label>
                <input type="password" class="form-control">

                <br>
                <button type="submit" class="enviar">Enviar</button>

                <router-link to="/redefinirSenha" class="text-center mt-3 link">Redefinir minha senha.</router-link>
            </form>
        </div>
    </main>

    <FooterComp />
</template>

<style scoped>

.container {
    max-width: 500px; /* Aumenta a largura máxima do contêiner */
    margin: 0 auto;
    padding: 20px;
}

.form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.formulario{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.custom-lead {
    font-size: 1.5rem; /* Aumenta o tamanho da fonte */
    color: #01400B; /* Define a cor */
    text-align: center;
}


label{
    align-self: flex-start;
    background-color: #fff;
}

.link{
    background-color: #fff;
}

input[type="text"], input[type="email"], input[type="password"] {
    margin-bottom: 10px;
    height: 25px;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #ccc; /* Cor de fundo das caixas de formulário */
    padding: 20px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #EAEBEE; /* Cor de fundo das caixas de formulário */
}

button {
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

button:hover {
    background-color: #012d08; /* Cor do botão ao passar o mouse */
}
</style>