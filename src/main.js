import { createApp } from 'vue'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import ConfirmationService from 'primevue/confirmationservice';
import PrimeVue from 'primevue/config'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'primeflex/primeflex.css';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(PrimeVue).use(ConfirmationService).use(VueAxios, axios).use(store).use(router).mount('#app')
