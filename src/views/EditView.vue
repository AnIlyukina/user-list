<script setup lang="ts">

import { useRouter, useRoute } from "vue-router";

import { storeToRefs } from 'pinia';

import { useUsersStore } from "../stores/user";
import { usePageStore } from "../stores/page";

import useGetDataset from '../composables/useGetDataset';

import { UserForm, UserForSend } from "../types/user";

import FormUser from '../components/FormUser.vue';

const router = useRouter();
const route = useRoute();

const useUsers = useUsersStore();
const { userList } = storeToRefs(useUsers);

const usePage = usePageStore();
const { currentPage } = storeToRefs(usePage);

const id = Number(route.query.id);

let dataUser: UserForm = {
  fullName: 'неизвестно',
  birthDate: '0000-00-00',
  description: '',
}

const { getDataForForm } = useGetDataset();

if(id > -1) {
  const foundedUser: UserForSend  = findUserById(id);

  if (foundedUser) {
    dataUser = getDataForForm(foundedUser);
  }
}

function findUserById (id: number): UserForSend {
  return (userList.value as UserForSend[])[id];
}

const editUser = (user: UserForSend) => {
  useUsers.editUser(user, id);
  router.push({
    name: 'HomeView',
    query: {
      page: currentPage.value,
    }
  });
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
