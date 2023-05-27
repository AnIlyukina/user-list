<script setup lang="ts">

const props = defineProps<{
  modelValue: string | null,
  placeholder?: string,
  label: string,
  type: string,
  maxlength: string,
  isValid?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const changeValue = (event: Event) => {
  emits('update:modelValue',(event.target as HTMLInputElement).value)
}
</script>
<template>
  <div>
    <label class="ml-2">
      {{ props.label }}:
    </label>
    <div class="mt-1">
      <input
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :maxlength="maxlength"
        class="block py-2 px-4 w-full  rounded-full
      shadow-sm focus:outline-[#818cf8]"
        :class="[isValid ? '' : 'border border-rose-500 focus:outline-none']"
        @input="changeValue"
      />
    </div>
  </div>
</template>