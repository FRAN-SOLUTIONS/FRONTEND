<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>


<template>
    <HeaderComp />
    <main class="containerDaPagina">
        <div class="conteudoDaPagina">
            <h1>Esta é a página de login.</h1>

            <div class="divDoFormulario">
                <form class="formulario">

                    <h1 class="tituloFormulario">Login</h1>
                    <br>
                    <label>Prontuário:</label>
                    <input type="text" >

                    <label>E-mail:</label>
                    <input type="email">

                    <label>Senha:</label>
                    <input type="password">

                    <button type="submit" class="enviar">Enviar</button>

                    <br>
                    <router-link to="/redefinirSenha">Redefinir minha senha.</router-link>
                </form>
            </div>
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

.tituloFormulario{
    text-align: center;
}

label{
    align-self: flex-start;
}

input[type="text"], input[type="email"], input[type="password"] {
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