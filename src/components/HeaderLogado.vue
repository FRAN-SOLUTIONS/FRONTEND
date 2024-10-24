<script setup>
import '@/assets/css/global.css';

function abrirNav() {
    document.getElementById("menuOculto").style.width = "300px";
    document.getElementById("principal").style.marginRight = "300px";
}

function fecharNav() {
    document.getElementById("menuOculto").style.width = "0";
    document.getElementById("principal").style.marginRight = "0";
}
</script>

<template>
    <header class="py-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img src="../assets/images/if_logo_2.png" alt="Logo" class="header-logo">
        </div>
        <div>
            <h1>// Nome do sistema</h1>
        </div>
        <div>
            <span @click="abrirNav()" style="cursor: pointer;">
                <font-awesome-icon class="icon-redondo" :icon="['far', 'user']" />
            </span>
            
            <aside id="menuOculto" class="menuOculto">
                <a href="" class="btnFechar" @click="fecharNav()">&times;</a>
                <a href="#">Sobre</a>
                <a href="#">Cursos</a>
                <a href="#">Endereços</a>
                <a href="#">Contatos</a>
            </aside>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #01400B;
    color: white;
}

.header-logo {
    height: 60px;
}

span{
    height: 40px;
}

.icon-redondo {
    border: 1px solid #fff; /* Cor da borda */
    border-radius: 50%; /* Borda redonda */
    padding: 5px; /* Adiciona um pouco de espaço ao redor do ícone */
    display: inline-block; /* Faz o elemento se comportar como um bloco para a borda funcionar */
}

.menuOculto{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #01400B;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.menuOculto a{
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #dddddd;
    display: block;
    transition: 0.5s;
}

.menuOculto a:hover{
    color: #ff2e2e;
}

.btnFechar{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 36px;
    margin: left 2%;;
}

#principal{
    /*padding: 16px;*/
    transition: margin-left 0.5s;

}

/* @media screen and (max-height: 450px){
    .menuOculto
} */
</style>