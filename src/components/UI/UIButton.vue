<script setup lang="ts">

defineProps<{
  text?: string,
}>();

</script>

<template>
  <button
    class="
      p-2
      ml-4
      bg-[#d3d7ff]
      hover:bg-[#818cf8]
      rounded-md
    "
  >
    {{ text }}
    <slot />
  </button>
</template>
