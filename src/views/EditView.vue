<script setup lang="ts">

import FormUser from '../components/FormUser.vue'

import {User} from "../types/user";

import { useRouter } from "vue-router";
import { useUsersStore } from "../stores/user";

const useUsers = useUsersStore()

const router = useRouter()

const stateDataUser = {
  firstName: 'Анна',
  lastName: 'Илюкина',
  middleName: 'Алексеевна',
  birthDate: '17.09.98',
  description: 'cbfbfbdfbdfbdffdbdfbdfbdfbdfbdfbdfbdfb'
}

const editUser = (user: User) => {
  console.log(user, 'user')
  useUsers.editUser(user, 1)
  router.push('/')
}

</script>

<template>
  <div class="pr-10 pl-10">
    <h1 class="text-center">Редактировать пользователя</h1>
    <div
      v-if="stateDataUser"
      class="mt-5"
    >
      <form-user
        :user="stateDataUser"
        :type="'edit'"
        @saveForm="editUser"
      />
    </div>
    <div v-else>
      Найти пользователя ... ?
    </div>
  </div>
</template>
