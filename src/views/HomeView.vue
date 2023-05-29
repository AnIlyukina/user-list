<script setup lang="ts">

import { ref } from 'vue';

import { storeToRefs } from 'pinia';

import {useRoute, useRouter} from "vue-router";

import { useUsersStore } from '../stores/user';
import { usePageStore } from '../stores/page';

import TableUsers from '../components/TableUsers.vue';

import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';
import '@ocrv/vue-tailwind-pagination/styles';

const router = useRouter();

const route = useRoute();

const useUsers = useUsersStore();
const { userCount } = storeToRefs(useUsers);

const usePage = usePageStore();
const { currentPage } = storeToRefs(usePage)

let page = route.query.page ? Number(route.query.page) : 1

usePage.changeCurrentPage(page);

const total = ref(userCount);
const perPage = ref(10);

const pageChange = (page: number) => {
  usePage.changeCurrentPage(page)

  router.push({
  name: 'HomeView',
    query: {
      page: currentPage.value
    }
  })
};

</script>

<template>
  <div
    class="
      p-[10px]
      pt-[50px]
      h-[100vh]
      box-border
    "
  >
    <h1 class="text-lg text-center mb-5">
      Список пользователей : {{ userCount }}
    </h1>

    <div
      v-if="userCount > 0"
      class="
        flex
        flex-col
        justify-between
        h-[calc(100%-50px)]
      "
    >
      <table-users
        :current-page="currentPage"
        :per-page="perPage"
      />

      <vue-tailwind-pagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="pageChange($event)"
      />
    </div>

    <div v-else>
      Пользователей нет
    </div>
  </div>
</template>
