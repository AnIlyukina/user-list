<script lang="ts" setup>

import UIButton from './UI/UIButton.vue';

import Close from 'vue-material-design-icons/Close.vue';

const emits = defineEmits<{
  (e: 'confirm', value: boolean): void
}>()

const confirm = (isConfirm: boolean) => {
  emits('confirm', isConfirm)
}

</script>

<template>
  <div
     class="
      flex
      fixed
      right-0
      top-0
      left-0
      bottom-0
      justify-center
      items-center
      overflow-auto
      h-full
      bg-black/50
    "
  >
    <div
      class="
      bg-white
        w-[400px]
        h-[200px]
        rounded
        p-6
        flex
        flex-col
        justify-between
      "
    >
    <div>
      <div class="flex justify-end">
        <u-i-button 
          @click="confirm(false)"
        >
          <close
            :size="20"
          />
        </u-i-button>
        
      </div>
      <h1
        class="text-center text-lg"
      >
        Удалить пользоваттеля АННА ИЛЮКИНА?
      </h1>

    </div>
    
    <div class="flex justify-around">
    <u-i-button
      text="Удалить"
      @click="confirm(true)"
    />
    <u-i-button
      text="Отменить"
      @click="confirm(false)"
    />
  </div>
    </div>
  </div>
</template>