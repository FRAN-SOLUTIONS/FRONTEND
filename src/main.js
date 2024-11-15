import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue3 } from 'bootstrap-vue-3'
/* import BootstrapVueNext from 'bootstrap-vue-next' */

import '@/assets/icons/icon-library'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Registrando componentes globais
app.component('font-awesome-icon', FontAwesomeIcon);

// Registrando plugins
app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)
/* app.use(BootstrapVueNext) */

app.mount('#app')