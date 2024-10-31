<script setup>
import '../assets/css/global.css'
</script>

<template>
  <header class="header py-1 d-flex align-items-center justify-content-between">
    <div class="logo-container d-flex align-items-center">
      <img
        src="../assets/images/if_logo_2.png"
        alt="Logo" width="68%"
      />
    </div>

    <div class="titulo-container flex-grow-1 d-flex justify-content-center">
      <h2 class="titulo" style="margin-left: 10%;">Orienta +</h2>
    </div>
        
    <div class="botao-container d-flex align-items-center">
      <router-link to="/cadastro">
        <button class="btn btn-outline-success mr-2 custom-btn">
          Cadastro
        </button>
      </router-link>
      <router-link to="/login">
        <button class="btn btn-outline-success mr-2 custom-btn">
          Login
        </button>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #01400b;
  color: white;
}

.titulo-container {
  text-align: center;
}

.titulo {
  margin: 0;
}

.botao-container {
  white-space: nowrap; /* Impede que os botões se quebrem em linhas diferentes */
}

.custom-btn {
  margin: 10px;
  border: 1px solid white;
  color: white;
}
</style>

<!-- <template>
 <header class="header py-1 d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <img
        src="../assets/images/if_logo_2.png"
        alt="Logo"
        class="header-logo"
        style="width: 70%; height: 70%"
      />
    </div>
    <div>
      <h2 class="titulo">Orienta +</h2>
    </div>
    <div class="botao-container d-flex align-items-center">
      <router-link to="/cadastroOrientadores">
        <button class="btn btn-outline-success mr-2 custom-btn">
          Cadastro
        </button>
      </router-link>
      <router-link to="/login">
        <button class="btn btn-outline-success mr-2 custom-btn">
          Login
        </button>
      </router-link>
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

.botao-container {
  white-space: nowrap; /* Impede que os botões se quebrem em linhas diferentes */
}

.custom-btn {
  margin: 10px;
  border: 1px solid white;
  color: white;
}
</style> -->