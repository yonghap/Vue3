import './assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import App from './App.vue'
import factories from './api/API'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)
app.use(factories)
app.mount('#app');
