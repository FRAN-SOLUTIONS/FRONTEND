<template>
  <header class="header">
    <h1 class="titulo">Orienta +</h1>
    <div class="buttons">
      <router-link to="/login">
        <button class="btn btn-outline-success custom-btn">Login</button>
      </router-link>
      <router-link to="/cadastro">
        <button class="btn btn-outline-primary custom-btn">Cadastro</button>
      </router-link>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #01400B;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.titulo {
  color: white;
  font-size: 2rem;
  text-align: center;
  margin: 0;
}

.buttons {
  position: absolute;
  right: 20px;
  display: flex;
  gap: 10px;
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