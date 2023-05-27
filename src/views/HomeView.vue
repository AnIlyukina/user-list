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
let perPage = ref(10)

const pageChange = (pageNumber: number) => {
  currentPage.value = pageNumber
}

</script>

<template>
  <div class="pr-10 pl-10">
    <h1 class="text-lg text-center mb-5">
      Список пользователей : {{ userCount }}
    </h1>
    <div
      v-if="userCount > 0"
      class="flex flex-col justify-between"
      >
      <div>
        <table-users/>
      </div>
      <div>
        <vue-tailwind-pagination
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
