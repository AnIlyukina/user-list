<script setup lang="ts">
import { reactive, ref } from 'vue';
import UIInput from './UI/UIInput.vue';
import UITextarea from './UI/UITextarea.vue';
import UIButton from './UI/UIButton.vue';
import { User } from '../types/user'
import { useRouter } from 'vue-router';

const props = defineProps<{
  user?: User,
  type: string
}>()


let errorFullName = ref('')
let errorBirthDate = ref('')

const initialUserData = props.user ? props.user : {
    fullName: '',
    birthDate: '',
    description: '',
}

const emits = defineEmits<{
  (e: 'saveForm', value: User): void
}>()

const userData: any = reactive({...initialUserData});

const router = useRouter();

const checkValid = () => {
  errorFullName.value = ''
  errorBirthDate.value = ''
  let isValid = true

  if (!userData.fullName) {
    errorFullName.value = "Заполните ФИО"
    isValid = false 
  }

  if (!userData.birthDate) {
    errorBirthDate.value = "Заполните дату рождения"
    isValid = false
  }

  return isValid
}

const cancel = () => {
  router.push('/');
}

const saveForm = () => {
    const isValid = checkValid()
    if (isValid) {

      emits('saveForm', userData)
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
