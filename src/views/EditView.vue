<script setup lang="ts">

import { useRouter, useRoute } from "vue-router";

import { storeToRefs } from 'pinia';

import { useUsersStore } from "../stores/user";

import changeFormatDate from '../composables/changeFormatDate';

import { UserForm, UserForSend } from "../types/user";

import FormUser from '../components/FormUser.vue';

const router = useRouter();
const route = useRoute();

let useUsers = useUsersStore();
let { userList } = storeToRefs(useUsers);

const id = Number(route.query.id);

let dataUser: UserForm = {
  fullName: 'неизвестно',
  birthDate: '0000-00-00',
  description: '',
}

if(id > -1) {
  const foundedUser: UserForSend  = findUserById(id);

  if (foundedUser) {
    dataUser = {
      fullName: `${foundedUser.firstName} ${foundedUser.lastName} ${foundedUser.middleName ? foundedUser.middleName : ''}`,
      birthDate: changeFormatDate(foundedUser.birthDate, 'DD.MM.YYYY'),
      description: foundedUser.description,
    }
  }
}

function findUserById (id: number): UserForSend {
  return (userList.value as UserForSend[])[id];
}

const editUser = (user: UserForSend) => {
  useUsers.editUser(user, id);
  router.push('/');
}
</script>

<template>
  <div class="pr-10 pl-10 pt-[50px]">
    <h1 class="text-center">Редактировать пользователя</h1>

    <form-user
      :user="dataUser"
      :type="'edit'"
      @saveForm="editUser"
    />
  </div>
</template>
