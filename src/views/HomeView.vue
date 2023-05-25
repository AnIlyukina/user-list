<script setup lang="ts">
import TableUsers from '../components/TableUsers.vue'

import { storeToRefs } from 'pinia';
import { useUsersStore } from '../stores/user';

const useUsers = useUsersStore()
const { userCount } = storeToRefs(useUsers)

</script>

<template>
  <div class="pr-10 pl-10">
    <h1>
      Список пользователей : {{ userCount }}
    </h1>
    <div v-if="userCount > 0">
      <table-users/>
    </div>
    <div v-else>
      Пользователей нет
    </div>
  </div>
</template>
