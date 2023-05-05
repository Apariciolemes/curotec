<template>
  <div class="todo-view">
    <TodoForm @emit-add-task="handleAddNewTask" />
    <TodoList
      :listTasks="listTasks"
      @emit-change-status="handleChangeStatus"
      @emit-delete-task="handleDeleteTask"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// interface
import type { Ref } from 'vue'
import type { Task } from '../interface/Task'

// components
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

const listTasks: Ref<Task[]> = ref([])

watch(
  () => listTasks.value.length,
  (_) => {
    updateTaskStorage()
  }
)

const updateTaskStorage = () => localStorage.setItem('tasks', JSON.stringify(listTasks.value))

function handleAddNewTask(task: Task) {
  listTasks.value.push(task)
}

function handleDeleteTask(id: String) {
  listTasks.value = listTasks.value.filter((task) => task.id != id)
}

function handleChangeStatus(id: String) {
  for (const task of listTasks.value) {
    if (task.id === id) {
      task.status = !task.status
      updateTaskStorage()
    }
  }
}
</script>
