<script setup lang="ts">
import { reactive } from 'vue';
import UIInput from './UI/UIInput.vue';
import UITextarea from './UI/UITextarea.vue';
import { User } from '../types/user'

const initialUserData = {
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    description: '',
}

const userData: User = reactive({...initialUserData});

</script>
<template>
  <div>
    <u-i-input
      v-model="userData.firstName"
      label="Фамилия"
      placeholder="Илюкина"
      type="text"
    />
    <u-i-input
      v-model="userData.lastName"
      label="Имя"
      placeholder="Анна"
      type="text"
    />
    <u-i-input
      v-model="userData.middleName"
      label="Отчество"
      placeholder="Алексеевна"
      type="text"
    />
    <u-i-input
      v-model="userData.birthDate"
      label="Дата рождения"
      placeholder="17.09.1998"
      type="text"
    />
    <u-i-textarea
      v-model="userData.description"
      label="Описание"
      placeholder="Описание"
      maxlength="100"
    />
  </div>
</template>
