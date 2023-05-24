<script setup lang="ts">

const props = defineProps<{
  modelValue: string | null,
  placeholder?: string,
  label: string,
  type: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const changeValue = (event: Event) => {
  emits('update:modelValue',(event.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="mb-7">
    <label class="ml-2">
      {{ props.label }}:
    </label>
    <div class="mt-1">
      <input
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        class="block py-2 px-4 w-full border-gray-300 rounded-full
      shadow-sm focus:ring-blue-500 focus:border-blue-500
      sm:text-sm focus:outline-none"
        @input="changeValue"
      />
    </div>
  </div>
</template>