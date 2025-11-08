import {createApp} from 'vue'
import App from './App.vue'
import '@/style.css'
import {Icon} from '@iconify/vue'
import {createPinia} from "pinia";
import router from './routes'

const app = createApp(App)
app.component('Icon', Icon)
app.use(createPinia())
app.use(router)
app.mount('#app')
