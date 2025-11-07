import {createApp} from 'vue'
import App from './App.vue'
import router from './routes'
import '@/style.css'
import {Icon} from '@iconify/vue'
import {createPinia} from "pinia";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon', Icon)
app.mount('#app')
