<script setup>
</script>

<template>
    <footer class="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div class="d-flex align-items-center col-md-4 mb-2 mb-md-0">
        <router-link to="home">
          <img src="../assets/images/FRAN_logo.png" width="40px" style="border-radius: 50%; margin-left: 15px;">
        </router-link>
      </div>
      <div class="text-center col-md-4">
        <span>© 2024 FRAN Solutions, Inc. Todos os direitos reservados.</span>
      </div>
      <ul class="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex mb-0">
        <li class="ms-3">
          <a class="p-2 mt-1" href="https://suap.ifsp.edu.br/accounts/login/?next=/">
            <img src="../assets/images/suap_logo.png" style="width: 50px;">
          </a>
        </li>
        <li class="mt-1">
          <a class="p-2" href="https://spo.ifsp.edu.br/menu/191-estagios-documentos">
            <img src="../assets/images/if_logo_2.png" style="width: 23px;">
          </a>
        </li>
      </ul>
    </footer>
  </template>
  
<style scoped>
footer {
    background-color: #01400B;
    color: white;
    width: 100%;
}
</style>