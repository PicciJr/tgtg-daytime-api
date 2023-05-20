<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DatePicker from './components/DatePicker.vue'
import Dropdown from './components/Dropdown.vue'
import Button from './components/Button.vue'
import DaytimeProvider from './components/DaytimeProvider.vue'
import DaytimeInfoList from './components/DaytimeInfoList.vue'
import { useLocationProvider } from './composables/useLocationProvider'
import { defineEmits, ref } from 'vue'

const { lat, lng } = useLocationProvider().getCurrentPosition()
const date = ref(null)

const handleDateUpdated = (dateSelected) => {
  date.value = dateSelected
}

const emit = defineEmits(['get-results'])
</script>

<template>
  <div class="flex flex-col max-w-2xl gap-4 p-4 mx-auto mt-24 border rounded-lg bg-green-50">
    <!-- Daytime provider -->
    <DaytimeProvider :lat="lat" :lng="lng" :date="date" v-slot="{ getResults, data }">
      <!-- Datepicker -->
      <DatePicker @date-updated="handleDateUpdated" />
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
      <Button text="Get results" @click="getResults" />
      <!-- Results -->
      <DaytimeInfoList v-if="data" :data="data" />
    </DaytimeProvider>
  </div>
</template>
