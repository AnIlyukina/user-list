<script setup lang="ts">
  import { ref, toRefs, watch, reactive } from 'vue'
  import { storeToRefs } from "pinia";
  import { useUsersStore } from "../stores/user";
  import { useRouter } from 'vue-router';

  import { UserForSend } from '../types/user' 

  import ConfirmModal from "./ConfirmModal.vue";
  import UIButton from './UI/UIButton.vue'

  import PencilBox from 'vue-material-design-icons/PencilBox.vue';
  import DeleteEmpty from 'vue-material-design-icons/DeleteEmpty.vue';

  const props = defineProps<{
    currentPage: number,
    perPage: number 
  }>()

  let { currentPage, perPage } = toRefs(props)

  let useUsers = useUsersStore()
  let { userList } = storeToRefs(useUsers)

  let userListTable: UserForSend[] = reactive([])

  // функция считает первый и последний индекс массива для отображения в таблице
  const getUserListTable = (current: number) => {
    let result;

    const firstIndex = current * perPage.value - 10
    const lastIndex = current * perPage.value

    const users = [...userList.value]

    if (Array.isArray(users) && users.length > 10) {
      result = users.slice(firstIndex, lastIndex)
    } else {
      result = users
    }

    return result
  }
  
  userListTable = getUserListTable(currentPage.value)

  // слежу за изменениями текущей страницы или пользователей
  // в случае изменения пересчитываю список пользователей для показа
  watch(currentPage, (value) => {
    
    userListTable = getUserListTable(value)
  })

  watch(userList.value, () => {

    userListTable = getUserListTable(currentPage.value)
  })

  let isOpenConfirmModal = ref(false)
  const router = useRouter();

  let deletedIndex = ref(0)

  const openConfirmModal = (index: number) => {
    deletedIndex.value = index
    if (currentPage.value > 0) {
      deletedIndex.value = index + (currentPage.value * perPage.value - 10)
    }
    isOpenConfirmModal.value = true
  }
  const closeConfirmModal = () => {
    isOpenConfirmModal.value = false
  }

  const confirm = (isConfirmed: boolean) => {
    if (isConfirmed) {
      useUsers.deleteUser(deletedIndex.value)
    }
    closeConfirmModal()
  }

  const editUser = (index: number) => {
    let queryId = index
    if (currentPage.value > 0) {
      queryId = index + (currentPage.value * perPage.value - 10)
    }
    router.push({
      name: 'editView',
      query: { id: queryId }
    })
  }

</script>

<template>
  <confirm-modal
    v-if="isOpenConfirmModal"
    @confirm="confirm"
  />

  <table class="table-auto border border-slate-400 w-full mb-2">
    <thead>
      <tr>
        <th class="border border-slate-500 p-2">Фамилия</th>
        <th class="border border-slate-500 p-2">Имя</th>
        <th class="border border-slate-500 p-2">Отчество</th>
        <th class="border border-slate-500 p-2">Дата рождения</th>
        <th class="border border-slate-500 p-2">Описание</th>
        <th class="border border-slate-500 p-2"/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, index) in userListTable"
        :key="index"
      >
        <td class="border border-slate-500 p-2">{{ user.firstName }}</td>
        <td class="border border-slate-500 p-2">{{ user.lastName }}</td>
        <td
          class="border border-slate-500 p-2"
          :class="[user.middleName ? '' : 'text-center']"
        >
          {{ user.middleName ? user.middleName : '—' }}
        </td>
        <td class="border border-slate-500 p-2">{{ user.birthDate }}</td>
        <td
          class="border border-slate-500 p-2"
          :class="[user.description ? '' : 'text-center']"
        >
          {{ user.description ? user.description : '—' }}
        </td>
        <td class="border border-slate-500 p-2 w-[150px]">
          <u-i-button
            @click="editUser(index)"
          >
            <pencil-box
              :size="26"
            />
          </u-i-button>
          <u-i-button
            @click="openConfirmModal(index)"
          >
            <delete-empty
              :size="26"
            />
          </u-i-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
