<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import UIInput from './UI/UIInput.vue';
import UITextarea from './UI/UITextarea.vue';
import { User } from '../types/user'
import { useRouter } from 'vue-router';

const props = defineProps<{
  user?: User,
  type: string
}>()


const initialUserData = props.user ? props.user : {
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    description: '',
}

const emits = defineEmits<{
  (e: 'saveForm', value: User): void
}>()

const userData: User = reactive({...initialUserData});

const router = useRouter();

const cancel = () => {
  router.push('/');
}

const saveForm = () => {
    emits('saveForm', userData)
}

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
  <div class="flex justify-end">
    <button
      class="p-2 ml-3 bg-stone-400 rounded-md"
      @click="saveForm"
      >
      Сохранить
    </button>
      <button
        class="p-2 ml-3 bg-stone-400 rounded-md"
        @click="cancel"
        >
      Отменить
    </button>
    </div>
</template>
