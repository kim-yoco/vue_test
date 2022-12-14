import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import router from './route/index'

// 将route载入
const app = createApp(App);
app.use(router)
app.mount('#app');