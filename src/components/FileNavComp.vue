<script setup></script>

<template>
    <div class="caixa">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link 
                    to="homeOrientador" 
                    class="nav-link" 
                    :class="{ active: $route.name === 'HomeOrientador' }" 
                    aria-current="page"
                    style="color: inherit; text-decoration: none;">
                    DashBoard
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    to="perfil" 
                    class="nav-link" 
                    :class="{ active: $route.name === 'Perfil' }"
                    style="color: inherit; text-decoration: none;">
                    Perfil
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    to="notificacoes" 
                    class="nav-link" 
                    :class="{ active: $route.name === 'NotificacoesPage' }" 
                    aria-current="page"
                    style="color: inherit; text-decoration: none;">
                    Alertas
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.caixa {
    margin-top: 1rem;
}

.nav-item {
    border: 1px solid #01400b; /* Cor da borda do nav-item */
    border-bottom: none; /* Remove a borda inferior do nav-item */
    border-radius: 0.25rem 0.25rem 0 0; /* Arredondar os cantos superiores */
}

.nav-tabs .nav-link {
    border-bottom: 1px solid transparent; /* Borda inferior padrão das abas */
    transition: border-color 0.3s; /* Suaviza a transição da cor da borda */
}

.nav-tabs .nav-link:hover {
    border-color: transparent; /* Mantém a borda inferior transparente ao passar o mouse */
}

.nav-tabs .nav-link.active {
    color: #01400b; /* Cor do texto da aba ativa */
}

.nav-tabs .nav-link.active {
    border-bottom: 1px solid transparent; /* Cor da borda inferior da aba ativa */
}

.nav-tabs {
    border-bottom: 1px solid #01400b; /* Cor e espessura da borda */
}
</style>

<!-- <template>
    <div class="caixa">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link 
                    to="homeOrientador" 
                    class="nav-link" 
                    :class="{ active: $route.name === 'HomeOrientador' }" 
                    aria-current="page"
                    style="color: inherit ; text-decoration: none;">
                    DashBoard
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    to="perfil" 
                    class="nav-link" 
                    :class="{ active: $route.name === 'Perfil' }"
                    style="color: inherit ; text-decoration: none;">
                    Perfil
                </router-link>
                
            </li>
        </ul>
    </div>
</template>

<style scoped>

.caixa{
    margin-top: 1rem;
}

.nav-item {
  border: 1px solid #01400b;
  border-bottom: none;
  /* border-radius: top-left top-right bottom-right bottom-left; */
  border-radius: 0.25rem 0.25rem 0 0;
}

.nav-tabs .nav-item .nav-link.active {
    border-bottom: transparent; /* Remove a borda inferior da aba ativa */
}

.nav-tabs {
  border-bottom: 1px solid #01400b; /* Cor e espessura da borda */
}
</style> -->