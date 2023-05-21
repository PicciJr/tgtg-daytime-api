<template>
  <section class="space-x-3 text-lg text-gray-500">
    <span>&#128721;</span>
    <span class="italic">{{ message }}</span>
    <span>&#128721;</span>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  message: {
    type: String,
    default: 'Oops, something went wrong. Please try again later.'
  }
})
</script>
