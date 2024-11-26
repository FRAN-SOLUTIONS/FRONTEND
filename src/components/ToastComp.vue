<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'bootstrap';
import { ref, onMounted, computed } from 'vue';

// Definição das props
const props = defineProps({
  mensagem: {
    type: String,
    required: true,
    default: 'Mensagem padrão do Toast',
  },
  tipo: {
    type: String,
    required: true,
    default: 'sucesso',
  },
  mensagemAdicional: {
    type: String,
  },
});

let toastInstance = null;
const toastRef = ref(null);

onMounted(() => {
  if (toastRef.value) {
    toastInstance = new Toast(toastRef.value);
  }
});

const cor = computed(() => {
  switch (props.tipo) {
    case 'sucesso':
      return '#4CAF50';
    case 'alerta':
      return '#D7A800';
    case 'perigo':
      return '#B33A3A';
    default:
      return 'bg-secondary';
  }
});

const botaoClasse = computed(() => {
  switch (props.tipo) {
    case 'sucesso':
      return 'btn btn-success';
    case 'alerta':
      return 'btn btn-warning';
    case 'perigo':
      return 'btn btn-danger';
    default:
      return 'btn btn-secondary';
  }
});

const showToast = () => {
  if (toastInstance) {
    toastInstance.show();
  }
};
</script>

<template>
  <div>
    <button class="btn btn-primary" @click="showToast">Mostrar Toast</button>

    <div
      class="toast custom-toast bg-body-tertiary"
      ref="toastRef"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body">
        <h5 :style="{ color: cor }"><strong>{{ mensagem }}</strong></h5>
        <div class="mt-2 pt-2 border-top">
          {{ mensagemAdicional }}
        </div>
        <button type="button" data-bs-dismiss="toast" aria-label="Close" :class="[botaoClasse]" style="color: white;">Fechar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-toast {
  color: #a3a3a3;
  border: 1px solid #a3a3a3;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
}
</style>