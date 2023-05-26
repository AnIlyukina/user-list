<script setup lang="ts">

import FormUser from '../components/FormUser.vue'

import { UserForm, UserForSend } from "../types/user";

import { useRouter, useRoute } from "vue-router";

import { useUsersStore } from "../stores/user";

import { storeToRefs } from 'pinia'

import { ref } from 'vue'

let useUsers = useUsersStore()
let { userList } = storeToRefs(useUsers)

const router = useRouter()

const route = useRoute()

const id = Number(route.query.id)


//@ts-ignore TODO
let dataUser: UserForm = ref()

const findUserById = (id: number): UserForSend => {
  return (userList.value as any)[id]
}

if(id > -1) {
 const foundedUser: UserForSend  = findUserById(id)
  if (foundedUser) {
    dataUser = {
      fullName: `${foundedUser.firstName} ${foundedUser.lastName} ${foundedUser.middleName}`,
      birthDate: foundedUser.birthDate,
      description: foundedUser.description
    }
  }
}



const editUser = (user: UserForSend) => {
  useUsers.editUser(user, id)
  router.push('/')
}

</script>

<template>
  <div class="pr-10 pl-10">
    <h1 class="text-center">Редактировать пользователя</h1>
    <form-user
      :user="dataUser"
      :type="'edit'"
      @saveForm="editUser"
    />
  </div>
</template>
