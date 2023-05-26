<script setup lang="ts">

import { RouterLink } from 'vue-router'

import MenuItem from './MenuItem.vue'

</script>

<template>
  <div
    class="
      h-[100%]
      p-6 w-[240px]
      fixed
      bg-emerald-100
    "
  >
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
          name="Создать пользователя"
          page-url="/create"
        />
      </RouterLink>
    </ul>
  </div>
</template>
