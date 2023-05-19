<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DatePicker from './components/DatePicker.vue'
import Dropdown from './components/Dropdown.vue'
import Button from './components/Button.vue'
</script>

<template>
  <div class="flex flex-col max-w-2xl gap-4 p-4 mx-auto mt-24 border rounded-lg bg-green-50">
    <!-- Datepicker -->
    <DatePicker />
    <!-- Filter -->
    <Dropdown button-text="Filter type" />
    <!-- Terms and conditions -->
    <div class="flex items-center gap-3">
      <input
        id="default-checkbox"
        type="checkbox"
        class="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >I accept the terms and conditions</label
      >
    </div>

    <!-- Submit button -->
    <Button text="Get results" />
  </div>
</template>
