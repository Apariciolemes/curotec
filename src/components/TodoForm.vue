<template>
  <div class="todo-form">
    <BaseInput v-model="task.title" />
    <BaseButton label="Add" @emit-click="handleAdd" />
  </div>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'
import { defineEmits, reactive } from 'vue'

// components
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

// types
import type { Task } from '@/interface/Task'

const initialTask = () => ({
  id: '',
  title: '',
  status: false
})

let task: Task = reactive(initialTask())

const emit = defineEmits(['emit-add-task'])

function handleAdd() {
  task.id = uuidv4()
  emit('emit-add-task', task)

  task = initialTask()
}
</script>

<style lang="scss">
.todo-form {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
