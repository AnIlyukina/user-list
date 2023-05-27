<script setup lang="ts">

import AppNavigation from './components/AppNavigation.vue';
import AppMain from "./components/AppMain.vue";

</script>

<template>
  <app-navigation/>
  <app-main>
    <router-view/>
  </app-main>
</template>
