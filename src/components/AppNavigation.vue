<script setup lang="ts">

import { RouterLink } from 'vue-router'

import MenuItem from './MenuItem.vue'

</script>
<template>
  <div class="h-[100%] p-6 w-[240px] fixed z-50">
    <div class="my-8"></div>
    
    <ul>
      <RouterLink to="/">
        <menu-item
          class="ml-[1px]"
          name="Список пользователей"
          page-url="/"
        />
      </RouterLink>
      <RouterLink to="/create">
        <menu-item
          class="ml-[1px]"
          name="Создать пользователя"
          page-url="/create"
        />
      </RouterLink>
      <RouterLink to="/edit">
        <menu-item
          class="ml-[1px]"
          name="Редактировать пользователя"
          page-url="/edit"
        />
      </RouterLink>
    </ul>
  </div>
</template>
