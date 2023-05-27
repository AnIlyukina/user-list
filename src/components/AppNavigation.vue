<script setup lang="ts">

import { RouterLink } from 'vue-router';

import MenuItem from './MenuItem.vue';

import AccountGroupOutline from 'vue-material-design-icons/AccountGroupOutline.vue';
import AccountMultiplePlusOutline from 'vue-material-design-icons/AccountMultiplePlusOutline.vue';

</script>

<template>
  <div
    class="
      h-[100%]
      p-6 w-[125px]
      fixed
      bg-[#818cf8]
    "
  >
    <div class="my-8"></div>

    <ul>
      <RouterLink to="/">
        <menu-item
          class="ml-[1px]"
          name=""
          page-url="/"
        >
          <account-group-outline :size="40"/>
        </menu-item>
      </RouterLink>
      <RouterLink to="/create">
        <menu-item
          name=""
          page-url="/create"
        >
          <account-multiple-plus-outline :size="40"/>
        </menu-item>
      </RouterLink>
    </ul>
  </div>
</template>
