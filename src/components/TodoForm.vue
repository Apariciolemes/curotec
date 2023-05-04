<template>
  <div class="todo-form">
    <BaseInput v-model="task.title" />
    <BaseButton label="Add" @emit-click="handleAdd" />
  </div>
</template>

<script setup>
import { defineEmits, reactive } from 'vue'

// components
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

// task
const task = reactive({
  id: '',
  title: '',
  status: false
})

const emit = defineEmits(['emit-add-task'])

function handleAdd() {
  const id = Math.floor(Math.random() * (99999999 - 1 + 1)) + 1

  task.id = id
  emit('emit-add-task', task)
}
</script>

<style lang="scss">
.todo-form {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
