import { defineStore } from 'pinia'

import { reactive, computed } from 'vue'

import { UserForSend } from '../types/user'

export const useUsersStore = defineStore("users", 
  () => {

    let users
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users') || '')
    } else {
      users = []
    }
  
    const userList: UserForSend[] = reactive(users)

    const userCount = computed<number>(() => userList.length)

    function createUser (user: UserForSend) {
        userList.push(user)
    }

    function editUser (user: UserForSend, index: number) {
        userList.splice(index, 1, user)
    }

    function deleteUser (index: number) {
        userList.splice(index, 1)
    }

    return {
        createUser,
        editUser,
        deleteUser,
        userList,
        userCount
    }
  }
);
