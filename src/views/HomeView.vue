<script setup lang="ts">
import TableUsers from '../components/TableUsers.vue'

import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';
import '@ocrv/vue-tailwind-pagination/styles';

import { storeToRefs } from 'pinia';
import { useUsersStore } from '../stores/user';
import { ref } from 'vue'

const useUsers = useUsersStore()
const { userCount } = storeToRefs(useUsers)

let currentPage = ref(1)
const total = ref(userCount)
const perPage = ref(10)

const pageChange = (pageNumber: number) => {
  currentPage.value = pageNumber
}

</script>

<template>
  <div class="p-[10px] pt-[50px] h-[100vh] box-border">
    <h1 class="text-lg text-center mb-5">
      Список пользователей : {{ userCount }}
    </h1>
    <div
      v-if="userCount > 0"
      class="flex flex-col justify-between h-[calc(100%-50px)]"
    >
      <div>
        <table-users
          :current-page="currentPage"
          :per-page="perPage"
        />
      </div>
      <div>
        <vue-tailwind-pagination
          v-if="userCount > 10"
          :current="currentPage"
          :total="total"
          :per-page="perPage"
          @page-changed="pageChange($event)"
        />
      </div>
    </div>
    <div v-else>
      Пользователей нет
    </div>
  </div>
</template>
