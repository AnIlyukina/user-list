import { ref } from 'vue';

import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {

  let currentPage = ref(1);

  const changeCurrentPage = (page: number) => {
    currentPage.value = page;
  }

  return {
    currentPage,
    changeCurrentPage,
  }
})