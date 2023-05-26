import { createApp, watch } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router';

const pinia = createPinia()

// сохранение состояния в локальное хранилище
watch(
  pinia.state,
  (state) => {
    localStorage.setItem("users", JSON.stringify(state.users.userList));
  },
  { deep: true }
);

const app = createApp(App)

app.use(router)

app.use(pinia)

app.mount('#app')
