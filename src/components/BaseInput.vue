<template>
  <input class="base-input" v-model="value" :placeholder="props.placeholder" />
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const value = ref('')

const props = defineProps({
  placeholder: String
})
</script>

<style>
.base-input {
  border: 1px solid gray;
  border-radius: 5px;
  height: 60px;
}
</style>
