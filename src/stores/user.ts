import { defineStore } from 'pinia'

import { reactive, computed } from 'vue'

import { User } from '../types/user'

export const useUsersStore = defineStore("user", () => {

    let users = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).userList : []
    // localStorage.removeItem("user");
    const userList: User[] = reactive(users)

    const userCount = computed<number>(() => userList.length)

    function createUser (user: User) {
        userList.push(user)
    }

    function editUser (user: User, index: number) {
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
});
