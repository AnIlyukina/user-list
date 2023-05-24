import { defineStore } from 'pinia'

import { reactive, computed } from 'vue'

import { User } from '../types/user'

export const useUsersStore = defineStore("user", () => {

  const userList: User[] = reactive([])

  const userCount = computed<number>(() => userList.length)
  function createUser (user: User) {
    userList.push(user)
  }

  function editUser (user: User) {
    console.log(user);
    
  }

  function deleteUser (id: string) {
    console.log(id, 'id')
  }

 
  return {
    createUser,
    editUser,
    deleteUser,
    userList,
    userCount
  }
});