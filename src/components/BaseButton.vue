<template>
  <button class="base-button" @click="handleClick">
    {{ props.label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const emit = defineEmits(['emit-click'])

function handleClick() {
  emit('emit-click')
}

const props = defineProps({
  label: String
})
</script>

<style scoped>
.base-button {
  background-color: aliceblue;
  padding: 30px 24px;
  font-size: 1.25rem;
  line-height: 1.75rem;
  min-width: 150px;
  outline: none;
  border: 0;
}
</style>
