<script setup>
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'

import '@/assets/css/global.css'
</script>

<template>
  <div>
    <HeaderLogado />

    <main class="conteudo"> 
      <div class="container-xxl mt-5 mb-5 p-5 text-center">
        <div class="row justify-content-md-center">
          <div class="col-4 g-2 m-2 p-4 d-flex flex-column align-items-center justify-content-center" style="border-right: 2px solid #01400b; height: 100%;">
            <img src="@/assets/images/user.png" alt="" width="50%" style="margin: 10%;">
            <h1>Nome Completo</h1>
            <textarea placeholder="Dados Cadastrados" style="margin: 20%;"></textarea>
          </div>
          <div class="col-3 g-2 m-2 p-4 d-flex flex-column align-items-center justify-content-center">
            <div class="text-center mb-2"><p>Dashboard</p></div>
            <div class="text-center mb-2"><p>Relatórios</p></div>
            <div class="text-center mb-2"><p>Processos Ativos</p></div>
            <div class="text-center mb-2"><p>Despachos</p></div>
            <div class="text-center"><p>Todos os Processos</p></div>
          </div>
        </div>
        <div class="row" style="background-color: rosybrown; margin-top: 5%;">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus velit explicabo officiis tempora consectetur! Porro modi nesciunt illo provident nihil mollitia, fugit necessitatibus aperiam nulla sint libero, blanditiis debitis numquam!
        </div>
      </div>
    </main>

    <!-- <main class="conteudo">
      <div class="container-xxl mt-5 mb-5 p-5 text-center">
        <div class="row justify-content-md-center"  style="background-color: palevioletred;">
          <div class="col-4 g-2 m-2 p-4" style="background-color: pink; border-right: 2px solid #01400b;">
            <img src="@/assets/images/user.png" alt="" width="50%">
            <h1>Nome Completo</h1>
          </div>
          <div class="col-3 g-2 m-2 p-4 align-items-center justify-content-center" style="border-left: 2px solid #01400b;">
            <div class="d-flex align-items-center">
              <p>Dashboard</p>
            </div>
            <div class="d-flex align-items-center">
              <p>Relatórios</p>
            </div>
            <div class="d-flex align-items-center">
              <p>Processos Ativos</p>
            </div>
            <div class="d-flex align-items-center">
              <p>Despachos</p>
            </div>
            <div class="d-flex align-items-center">
              <p>Todos os Processos</p>
            </div>
          </div>
        </div>
        <div class="row"  style="background-color: rosybrown;">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus velit explicabo officiis tempora consectetur! Porro modi nesciunt illo provident nihil mollitia, fugit necessitatibus aperiam nulla sint libero, blanditiis debitis numquam!
        </div>
      </div>
    </main> -->

    <FooterComp />
  </div>
</template>

<style lang="css" scoped></style>
