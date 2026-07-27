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
      <slot name="option_icon"></slot>
      <slot>default content</slot>
    </span>
  </label>
</template>
<style scoped>
.option {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: nowrap;
}

.option input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.option-custom {
  display: inline-flex;
  gap: 10px;
  padding: 5px 10px;
  border: 2px solid rgb(156, 100, 147);
  color: rgb(156, 100, 147);
  border-radius: 5px;
  position: relative;
  outline: none;
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.option input:checked ~ .option-custom {
  padding: 5px 12px;
  border-color: rgb(156, 100, 147);
  background-color: rgb(216, 182, 211);
  color: white;
}

.option input:active ~ .option-custom {
  background-color: orange;
}
</style>
