<script setup lang="ts">

const props = defineProps<{
  text?: string,
}>()

</script>

<template>
    <button
    class="
      p-2 ml-3 
      bg-emerald-200
      hover:bg-emerald-300
      rounded-md
    "
    >
    {{ props.text }}
   <slot/>
  </button>
</template>