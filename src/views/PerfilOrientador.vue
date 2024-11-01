<script setup>
import HeaderLogado from '@/components/HeaderLogado.vue'
import FooterComp from '@/components/FooterComp.vue'
import FileNavComp from '@/components/FileNavComp.vue'

import '@/assets/css/global.css'
</script>

<template>
  <div>
    <HeaderLogado />
    <main class="conteudo mt-0">
      <FileNavComp />
      <div
        class="container-xxl mt-3 text-center"
        style="border: 1px solid #01400b; border-radius: 0.25rem"
      >
        <div class="row">
          <div
            class="col-3 d-flex flex-column align-items-center"
            style="border-right: 1px solid #01400b; height: 100%"
          >
            <img
              src="@/assets/images/user.png"
              alt=""
              width="50%"
              style="margin: 10%"
            />
            <h1>Nome Completo</h1>
            <textarea
              placeholder="Dados Cadastrados"
              style="margin: 20%"
            ></textarea>
          </div>
          <div
            class="col-2 g-2 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="text-center mb-2"><p>Dashboard</p></div>
            <div class="text-center mb-2"><p>Relatórios</p></div>
            <div class="text-center mb-2"><p>Processos Ativos</p></div>
            <div class="text-center mb-2"><p>Despachos</p></div>
            <div class="text-center"><p>Todos os Processos</p></div>
          </div>
          <div
            class="col-7 justify-content-center"
            style="border-left: 1px solid #01400b"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            modi molestiae illo nam tempore quod voluptates ea saepe officiis
            labore vero nostrum pariatur expedita eligendi, eveniet unde quos
            corporis? Sequi!
          </div>
        </div>
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<style scoped></style>
