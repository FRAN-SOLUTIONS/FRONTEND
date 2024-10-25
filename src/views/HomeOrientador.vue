<script setup>
    import HeaderLogado from '@/components/HeaderLogado.vue';
    import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <HeaderLogado />
    <main class="conteudo">
        <div>
            <h1>Esta é a página inicial do orientador logado.</h1>
            <h1>DashBoard do Orientador</h1>

            <router-link to="cadastroAlunos">
                <h2>Cadastrar novo aluno/orientando.</h2>
            </router-link>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
</style>