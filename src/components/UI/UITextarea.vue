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
        class="
          block
          py-2
          px-4
          w-full
          border-gray-300
          rounded
          focus:outline-[#818cf8]
          shadow-sm
        "
        rows="4"
        :value="props.modelValue ? props.modelValue : ''"
        :placeholder="props.placeholder"
        :maxlength="maxlength"
        @input="changeValue"
      />
    </div>
  </div>
</template>