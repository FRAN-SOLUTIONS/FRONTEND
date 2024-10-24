<script setup>
    import HeaderLogado from '@/components/HeaderLogado.vue';
    import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <HeaderLogado />
    <main class="conteudo">
        <div>
            <h1>Esta é a página inicial do coordenador de estagios.</h1>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
h1{
    color: orange;
}
</style>