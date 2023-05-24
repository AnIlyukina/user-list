<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUsersStore } from '../stores/user';
const useUsers = useUsersStore()
const { userCount } = storeToRefs(useUsers)
</script>

<template>
  <div class="user-list">
    <h1>
      Список пользователей : {{ userCount }}
    </h1>
  </div>
</template>
