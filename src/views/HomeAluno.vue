<script setup>
    import HeaderComp from '@/components/HeaderComp.vue';
    import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <HeaderComp />
    <main class="conteudo">
        <div>
            <h1>Esta é a página inicial do Aluno logado.</h1>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
h1{
    color: gray;
}
</style>