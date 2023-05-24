<script setup lang="ts">

const props = defineProps<{
  modelValue: string | null,
  placeholder?: string,
  label: string,
  maxlength: string
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
      <textarea
        :value="props.modelValue ? props.modelValue : ''"
        :placeholder="props.placeholder"
        :maxlength="maxlength"
        rows="4"
        class="block py-2 px-4 w-full border-gray-300 rounded
      shadow-sm focus:outline-none"
        @input="changeValue"
      />
    </div>
  </div>
</template>