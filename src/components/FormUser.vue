<script setup lang="ts">

import { reactive, ref } from 'vue';

import { useRouter } from 'vue-router';

import changeFormatDate from '../composables/changeFormatDate';

import { UserForm, UserForSend } from '../types/user';

import UIInput from './UI/UIInput.vue';
import UITextarea from './UI/UITextarea.vue';
import UIButton from './UI/UIButton.vue';

const router = useRouter();

const props = defineProps<{
  user?: UserForm,
  type: string,
}>();

// ошибки валидации
let errorFullName = ref('');
let errorBirthDate = ref('');


// данные пользователя
const initialUserData = props.user ? props.user : {
    fullName: '',
    birthDate: '',
    description: '',
}

const userData: UserForm = reactive({...initialUserData});

const emits = defineEmits<{
  (e: 'saveForm', value: UserForSend): void;
}>();

const checkValid = () => {
  
  errorFullName.value = '';
  errorBirthDate.value = '';
  
  let isValid = true;

  // проверка фио
  if (!userData.fullName) {
    errorFullName.value = "Заполните ФИО";
    isValid = false;
  } else {
    let firstName = userData.fullName.split(' ')[0];
    let lastName = userData.fullName.split(' ')[1];

    if (!firstName || !lastName) {
      errorFullName.value = "Некорректно заполнены фамилия или имя";
      isValid = false;
    }
  }

  // проверка даты рождения
  if (!userData.birthDate) {
    errorBirthDate.value = "Заполните дату рождения";
    isValid = false;
  } else {
    const dateReg = /^\d{2}([.])\d{2}\1\d{4}$/

    if(!(userData.birthDate).match(dateReg)) {
      errorBirthDate.value = "Некорректно заполнена дата рождения";
      isValid = false;
    }
  }

  return isValid;
}

// закрываем модалку
const cancel = () => {
  router.push('/');
}

const saveForm = () => {
    const isValid = checkValid();

    if (isValid) {
      const dataForSend = {
        firstName: userData.fullName.split(' ')[0],
        lastName: userData.fullName.split(' ')[1],
        middleName: userData.fullName.split(' ')[2],
        birthDate: changeFormatDate(userData.birthDate, 'YYYY-MM-DD'),
        description: userData.description,
      }

      emits('saveForm', dataForSend);
    }
}
</script>

<template>
  <div>
    <u-i-input
      v-model="userData.fullName"
      :isValid="!errorFullName"
      label="ФИО (Отчество, если есть)"
      placeholder="Илюкина Анна Алексеевна"
      type="text"
      maxlength="30"
    />

    <div
     class="h-[30px] block text-center"
    >
      <small
        v-if="errorFullName"
        class="text-rose-500"
      >
        {{ errorFullName }}
      </small>
    </div>

    <u-i-input
      v-model="userData.birthDate"
      :isValid="!errorBirthDate"
      label="Дата рождения"
      placeholder="17.09.1998"
      type="text"
      maxlength="10"
    />

    <div
      class="h-[30px] block text-center"
    >
      <small
        v-if="errorBirthDate"
        class="text-rose-500"
      >
        {{ errorBirthDate }}
      </small>
    </div>

    <u-i-textarea
      v-model="userData.description"
      label="Описание"
      placeholder="Описание"
      maxlength="100"
    />
  </div>

  <div class="flex justify-end">
    <u-i-button
      text="Cохранить"
       @click="saveForm"
    />

    <u-i-button
      text="Отменить"
      @click="cancel"
    />
  </div>
</template>
