<script setup lang="ts">

import { useRouter } from 'vue-router';

import { useUsersStore } from '../stores/user';

import { UserForSend } from '../types/user';

import FormUser from '../components/FormUser.vue';

const useUsers = useUsersStore();

const router = useRouter();

const saveUser = (user: UserForSend ) => {
  useUsers.createUser(user);
  router.push('/');
}
</script>

<template>
  <div class="pr-10 pl-10 pt-[50px]">
    <h1 class="text-lg text-center">Создать пользователя</h1>
    
    <div class="mt-5">
      <form-user
        type="create"
        @saveForm="saveUser"
      />
    </div>
  </div>
</template>
