<script setup>
    import HeaderComp from '@/components/HeaderComp.vue';
    import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <HeaderComp />
    <main class="containerDaPagina">
        <div class="conteudoDaPagina">
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