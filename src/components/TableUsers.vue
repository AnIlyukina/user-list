<script setup lang="ts">
  import { ref } from 'vue'
  import { storeToRefs } from "pinia";
  import { useUsersStore } from "../stores/user";
  import { useRouter } from 'vue-router';

  import ConfirmModal from "./ConfirmModal.vue";
  import UIButton from './UI/UIButton.vue'

  import PencilBox from 'vue-material-design-icons/PencilBox.vue';
  import DeleteEmpty from 'vue-material-design-icons/DeleteEmpty.vue';

  let useUsers = useUsersStore()
  let { userList } = storeToRefs(useUsers)

  let isOpenConfirmModal = ref(false)
  const router = useRouter();

  let deletedIndex = ref(0)

  const openConfirmModal = (index: number) => {
    deletedIndex.value = index
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
    router.push({
      name: 'editView',
      query: { id: index }
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
        v-for="(user, index) in userList"
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
