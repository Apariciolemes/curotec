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
import { reactive } from 'vue'

// interface
import type { Task } from '../interface/Task'

// components
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

let listTasks: Array<Task> = reactive([])

function handleAddNewTask(task: Task) {
  listTasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(listTasks))
}

function handleDeleteTask(id: String) {
  const index = listTasks.findIndex((task) => task.id !== id)
  listTasks.splice(index, 1)
  localStorage.setItem('tasks', JSON.stringify(listTasks))
}

function handleChangeStatus(id: String) {
  for (const task of listTasks) {
    if (task.id === id) {
      task.status = !task.status
    }
  }

  localStorage.setItem('tasks', JSON.stringify(listTasks))
}
</script>

<style lang="scss"></style>
