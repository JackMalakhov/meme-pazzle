<script setup lang="ts">
defineProps<{
  value: string
  name: string
}>()
const model = defineModel()
</script>
<template>
  <label class="option">
    <input v-model="model" type="radio" :value="value" :name />
    <span class="option-custom">
      <slot>default content</slot>
    </span>
  </label>
</template>
<style scoped>
.option {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.option input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.option-custom {
  padding: 5px 10px;
  border: 2px solid #666;
  border-radius: 5px;
  position: relative;
  outline: none;
  white-space: nowrap;
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.option input:checked ~ .option-custom {
  padding: 5px 12px;
  border-color: #007bff;
}

.option input:active ~ .option-custom {
  background-color: orange;
}
</style>
