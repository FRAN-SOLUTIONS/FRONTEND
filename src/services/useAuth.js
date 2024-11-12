import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useAuth() {
  const isLoggedIn = ref(false);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost:8082/FRAN/orientadores/me');
      if (response.status === 200) {
        isLoggedIn.value = true;
      }
    } catch (error) {
      isLoggedIn.value = false;
      console.error("Erro ao verificar o status do orientador:", error);
    }
  };

  onMounted(() => {
    checkLoginStatus();
  });

  return { isLoggedIn };
}
