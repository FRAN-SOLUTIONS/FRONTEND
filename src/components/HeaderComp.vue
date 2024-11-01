<script setup>
import '../assets/css/global.css'
</script>

<template>
  <header class="header d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <router-link to="/">
        <img src="../assets/images/if_logo_2.png" alt="Logo" width="68%" />
      </router-link>
    </div>

    <div class="text-center flex-grow-1 d-flex justify-content-center">
      <h1 class="titulo" style="margin-left: 10%">Orienta +</h1>
    </div>

    <div class="botao-container d-flex align-items-center">
      <router-link to="/cadastro">
        <button class="btn btn-outline-success mr-2 custom-btn">
          Cadastro
        </button>
      </router-link>
      <router-link to="/login">
        <button class="btn btn-outline-success mr-2 custom-btn">Login</button>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 0 20px;
  background-color: #01400b;
  color: white;
}

.botao-container {
  white-space: nowrap; /* Impede que os botões se quebrem em linhas diferentes */
}

.custom-btn {
  margin: 10px;
  border: 1px solid white;
  color: white;
  transition: 0.3s;
}

.custom-btn:hover {
  background-color: #1e5d28;
}
</style>
