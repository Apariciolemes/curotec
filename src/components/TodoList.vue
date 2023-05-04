<template>
  <div class="todo-list">
    <ul v-for="item in props.listTasks" :key="`${item.id}`" class="d-flex align-items-center my-3">
      <li>{{ item.title }}</li>
      <li class="mx-5">Status: {{ currentStatus(item.status) }}</li>
      <BaseButton label="Update Task" @emit-click="emit('emit-change-status', item.id)" />
      <BaseButton label="Delete" @emit-click="emit('emit-delete-task', item.id)" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// components
import BaseButton from '@/components/BaseButton.vue'

// interface
import type { Task } from '@/interface/Task'

const props = defineProps({
  listTasks: Array<Task>
})

const emit = defineEmits()

function currentStatus(status: Boolean) {
  return status ? 'Concluded' : 'Pending'
}
</script>

<style lang="scss"></style>
