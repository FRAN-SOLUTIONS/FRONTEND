<script setup>
</script>

<template>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
        <div class="col-md-4 d-flex align-items-center">
            <router-link to="home"><img src="../assets/images/FRAN_logo.png" width="40px" style="border-radius: 50%; margin-left: 15px;"></router-link>
        </div>
        <div>
            <span class="mb-3">© 2024 FRAN Solutions, Inc. Todos os direitos reservados.</span>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="https://suap.ifsp.edu.br/accounts/login/?next=/"><img src="../assets/images/suap_logo.png" style="width: 40px; margin-right: 10px;"></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://spo.ifsp.edu.br/menu/191-estagios-documentos"><img src="../assets/images/if_logo_2.png" style="width: 30px; margin-right: 20px"></a></li>
        </ul>
    </footer>
</template>

<style scoped>
footer{
    background-color: #01400B;
    color: white;
}
</style>