<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DatePicker from './components/DatePicker.vue'
import Dropdown from './components/Dropdown.vue'
</script>

<template>
  <div class="max-w-2xl mx-auto border p-4 bg-green-50 rounded-lg mt-24 flex flex-col gap-4">
    <!-- Datepicker -->
    <DatePicker />
    <!-- Filter -->
    <Dropdown button-text="Filter type" />
    <!-- Terms and conditions -->
    <div class="flex gap-3 items-center">
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
    <button
      type="button"
      class="text-white bg-green-700 hover:bg-greeb-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 w-fit"
    >
      Get results
    </button>
  </div>
</template>
