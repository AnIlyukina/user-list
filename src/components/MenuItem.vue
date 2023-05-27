<script setup lang="ts">

import { toRefs } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  pageUrl: String,
  name: String,
})

const { pageUrl, name } = toRefs(props);

</script>

<template>
  <li
    class="
      flex
      item-center
      justify-start
      pb-6
      cursor-pointer
    "
  >
    <div
      :class="[route.path === pageUrl ? 'border rounded' : '']"
      class="
        font-semibold
        text-[14px]
        ml-4
        mt-0.5
        p-1
      "
    >
      <span>
        {{ name }}
      </span>
      <slot/>
    </div>
  </li>
</template>
