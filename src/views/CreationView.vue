<script setup lang="ts">

import { useUsersStore } from '../stores/user';

import { useRouter } from 'vue-router'
import FormUser from '../components/FormUser.vue';

import { User } from '../types/user'

const useUsers = useUsersStore()

const router = useRouter();

const saveUser = (user: User ) => {
  useUsers.createUser(user)
  router.push('/')
}
</script>

<template>
  <div class="pr-10 pl-10">
    <h1 class="text-center">Создать пользователя</h1>
    <div class="mt-5">
      <form-user
        @saveForm="saveUser"
      />
    </div>
  </div>
</template>
