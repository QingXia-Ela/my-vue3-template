import { createApp } from 'vue'
import './style.css'
import './styles/index.scss'
import App from './App.vue'

import i18n from '@/i18n'
import router from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n)
app.use(router)
app.use(pinia)

app.mount('#app')