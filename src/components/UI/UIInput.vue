<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  modelValue: string | null,
  placeholder?: string,
  label: string,
  type: string,
  maxlength: string,
  isValid?: boolean,
}>();

const { modelValue, placeholder, label, type, maxlength, isValid } = toRefs(props);

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const changeValue = (event: Event) => {
  emits('update:modelValue',(event.target as HTMLInputElement).value);
};

</script>

<template>
  <div>
    <label class="ml-2">
      {{ label }}:
    </label>

    <div class="mt-1">
      <input
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :class="[isValid ? '' : 'border border-rose-500 focus:outline-none']"
        class="
          block
          py-2
          px-4
          w-full
          rounded-full
          shadow-sm
          focus:outline-[#818cf8]
        "
        @input="changeValue"
      />
    </div>
  </div>
</template>