<script setup>
import { defineProps, computed } from 'vue'
import { BButton } from 'bootstrap-vue-3'

const props = defineProps({
  titulo: {
    type: String,
    required: true,
  },
  /* tamanhos de botão: p (pequeno), m (médio), g (grande) */
  tamanho: {
    type: String,
    default: 'm',
  },
})

// Computed que define a largura do botão com base no tamanho
const buttonWidth = computed(() => {
  return props.tamanho === 'p'
    ? '80px'
    : props.tamanho === 'g'
      ? '300px'
      : '190px'
})
</script>

<template>
  <!-- Aplica o width dinamicamente usando o :style -->
  <BButton :style="{ width: buttonWidth }" class="botao">
    {{ titulo }}
  </BButton>
</template>

<style scoped>
.botao {
  display: block;
  padding: 10px;
  background-color: #01400b; /* Cor do botão */
  color: #fff;
  border: none;
  border-radius: 8px; /* Bordas arredondadas */
  cursor: pointer;
  text-align: center;
  margin: 0 auto; /* Centraliza o botão */
}

.botao:hover {
  background-color: #2c7239 !important;
}
</style>
