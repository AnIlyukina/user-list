import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router';

const pinia = createPinia()

pinia.use(createPersistedState({
    auto: true
}))

const app = createApp(App)

app.use(router)

app.use(pinia)

app.mount('#app')
