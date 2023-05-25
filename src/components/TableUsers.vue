<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useUsersStore } from "../stores/user";
  import { useRouter } from 'vue-router';

  import PencilBox from 'vue-material-design-icons/PencilBox.vue';
  import DeleteEmpty from 'vue-material-design-icons/DeleteEmpty.vue';

  let useUsers = useUsersStore()
  let { userList } = storeToRefs(useUsers)

  const router = useRouter();

  const deleteUser = (index) => {
    useUsers.deleteUser(index)
  }

  const editUser = (user, index) => {
    router.push({
      name: 'editView',
      state: { user: user, index: index }
    })
  }

</script>

<template>
  <table class="table-auto border border-slate-400 w-full">
    <thead>
    <tr>
      <th class="border border-slate-300 p-2">Фамилия</th>
      <th class="border border-slate-300 p-2">Имя</th>
      <th class="border border-slate-300 p-2">Отчество</th>
      <th class="border border-slate-300 p-2">Дата рождения</th>
      <th class="border border-slate-300 p-2">Описание</th>
      <th class="border border-slate-300 p-2"/>
    </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, index) in userList"
        :key="index"
      >
        <td class="border border-slate-300 p-2">{{ user.firstName }}</td>
        <td class="border border-slate-300 p-2">{{ user.lastName }}</td>
        <td class="border border-slate-300 p-2">{{ user.middleName }}</td>
        <td class="border border-slate-300 p-2">{{ user.birthDate }}</td>
        <td class="border border-slate-300 p-2">{{ user.description }}</td>
        <td class="border border-slate-300 p-2 w-[150px]">
          <button
            class="mx-4"
            @click="editUser(user, index)"
          >
            <pencil-box
              :size="30"
            />
          </button>
          <button
            class="mx-4"
            @click="deleteUser(index)"
          >
            <delete-empty
              :size="30"
            />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
