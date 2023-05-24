<script setup lang="ts">
import { useRouter } from 'vue-router';

import FormUser from '../components/FormUser.vue';

const router = useRouter();

const cancel = () => {
  router.push('/');
}

const saveUser = () => {
  
}
</script>

<template>
  <div class="pr-10 pl-10">
    <h1 class="text-center">Создать пользователя</h1>
    <div class="mt-5">
      <form-user/>
    </div>
    <div class="flex justify-end">
      <button 
        class="p-2 ml-3 bg-stone-400 rounded-md"
        @click="saveUser"
        >
        Сохранить
      </button>
        <button
          class="p-2 ml-3 bg-stone-400 rounded-md"
          @click="cancel"
          >
        Отменить
      </button>
    </div>
  </div>
</template>
