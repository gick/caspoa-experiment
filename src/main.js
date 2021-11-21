import { createApp } from 'vue'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(PrimeVue).use(store).use(router).mount('#app')
