<script setup lang="ts">
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  pageUrl: String,
  name: String
})
const { pageUrl, name } = toRefs(props)

</script>

<template>
  <li
    class="flex item-center justify-start pb-6 cursor-pointer"
  >
    <div
      :class="route.path === pageUrl ? 'underline underline-offset-8' : ''"
      class="font-semibold text-[14px] ml-4 mt-0.5"
    >
      <span>
        {{ name }}
      </span>

    </div>
  </li>

</template>
