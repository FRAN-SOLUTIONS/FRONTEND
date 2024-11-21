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
    ? '100px'
    : props.tamanho === 'g'
      ? '300px'
      : '200px'
})
</script>

<template>
  <!-- Aplica o width dinamicamente usando o :style -->
  <BButton
    :style="{ width: buttonWidth }"
    class="custom-btn"
  >
    {{ titulo }}
    <slot></slot>
  </BButton>
</template>

<style scoped>
.custom-btn {
  margin: 10px;
  border: 1px solid white;
  color: white;
  transition: 0.3s;
  background-color: #01400b !important;
}

.custom-btn:hover {
  background-color: #2c7239 !important;
}

.custom-btn:focus{
  border: 1px solid white !important;
}
</style>