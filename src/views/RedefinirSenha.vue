<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>

<template>
    <HeaderComp />
    <main class="containerDaPagina">
        <div class="conteudoDaPagina">
            <h1>Esta é a página de redefinir senha.</h1>
        </div>
    </main>
    <FooterComp />
</template>

<style scoped>
h1{
    color: rgb(32, 16, 175);
}
</style>