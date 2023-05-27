import { createApp, watch } from 'vue';

import router from './router';

import { createPinia } from 'pinia';

import './style.css';

import App from './App.vue';

const pinia = createPinia();

// сохранение состояния в локальное хранилище
watch(
  pinia.state,
  (state) => {
    localStorage.setItem("users", JSON.stringify(state.users.userList));
  },
  { deep: true }
);

const app = createApp(App);

app.use(router);

app.use(pinia);

app.mount('#app');
