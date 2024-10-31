<script setup>
import '@/assets/css/global.css'
import { BAccordion, BAccordionItem } from 'bootstrap-vue-next'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap-vue-next/dist/bootstrap-vue-next.css'

function abrirMenu() {
  document.getElementById('menuOculto').style.width = '300px'
  document.getElementById('principal').style.marginRight = '300px'
}

function fecharMenu() {
  document.getElementById('menuOculto').style.width = '0'
  document.getElementById('principal').style.marginRight = '0'
}

function abrirNotificacao() {
  document.getElementById('notificacaoOculta').style.width = '25%'
  document.getElementById('principal').style.marginRight = '25%'
}

function fecharNotificacao() {
  document.getElementById('notificacaoOculta').style.width = '0'
  document.getElementById('principal').style.marginRight = '0'
}
</script>

<template>
  <header class="py-1 d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <img
        src="../assets/images/if_logo_2.png"
        alt="Logo"
        style="width: 70%; height: 70%"
      />
    </div>
    <div>
      <h2 class="titulo">Orienta +</h2>
    </div>
    <div>
      <span @click="abrirNotificacao()" style="cursor: pointer">
        <font-awesome-icon class="icon-redondo" :icon="['far', 'bell']" />
      </span>
      <span @click="abrirMenu()" style="cursor: pointer">
        <font-awesome-icon class="icon-redondo" :icon="['far', 'user']" />
      </span>

      <aside id="menuOculto" class="menuOculto">
        <a href="" class="btnFechar" @click="fecharMenu()">&times;</a>
        <router-link to="perfil">Perfil</router-link>
        <router-link to="alunos">Alunos</router-link>
        <a href="#">Sair</a>
      </aside>

      <aside id="notificacaoOculta" class="menuOculto">
        <a href="" class="btnFechar" @click="fecharNotificacao()">&times;</a>

        <!--este templante deve ser usaco com um v-for para que cada uma das nptificações seja renderizada num BAccordeonItem diferente-->
        <BAccordion free>
          <BAccordionItem
            style="background-color: #01400b; color: white"
            title="Nova mensagem."
          >
            <strong class="d-block"
              >This is the first item's accordion body.</strong
            >
            It is shown by default, until the collapse plugin adds the
            appropriate classes that we use to style each element. These classes
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It is also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </BAccordionItem>
        </BAccordion>
      </aside>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #01400b;
  color: white;
}

.icon-redondo {
  border: 1px solid #fff; /* Cor da borda */
  border-radius: 50%; /* Borda redonda */
  padding: 5px; /* Adiciona um pouco de espaço ao redor do ícone */
  display: inline-block; /* Faz o elemento se comportar como um bloco para a borda funcionar */
  margin-right: 20px;
}

.menuOculto {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #01400b;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.menuOculto a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #dddddd;
  display: block;
  transition: 0.5s;
}

.menuOculto a:hover {
  color: #ff2e2e;
}

.btnFechar {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
  margin: left 2%;
}

#principal {
  /*padding: 16px;*/
  transition: margin-left 0.5s;
}

.cartao {
  border: 1px solid #fff;
  margin-bottom: 5%;
  padding: 10%;
}

.custom-accordion-item {
  background-color: #f0f8ff; /* Alterando para um azul claro */
  color: #000; /* Ajustando a cor do texto */
  border-radius: 8px; /* Opcional: Cantos arredondados */
  padding: 1rem;
}

/* @media screen and (max-height: 450px){
    .menuOculto
} */
</style>
