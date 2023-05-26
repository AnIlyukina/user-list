<script setup lang="ts">

defineProps<{
  text?: string,
}>()

</script>

<template>
    <button
    class="
      p-2 ml-4
      bg-emerald-200
      hover:bg-emerald-300
      rounded-md
    "
    >
    {{ text }}
   <slot/>
  </button>
</template>
