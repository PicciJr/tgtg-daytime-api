<script setup lang="ts">
import DatePicker from './DatePicker.vue'
import Dropdown from './Dropdown.vue'
import Button from './Button.vue'
import DaytimeInfoList from './DaytimeInfoList.vue'
import { defineEmits, defineProps, PropType, ref } from 'vue'
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'

const areTermsAndConditionsAccepted = ref(false)

const handleDateUpdated = (dateSelected) => {
  emit('date-updated', dateSelected)
}

const props = defineProps({
  data: {
    type: Object as PropType<SunriseSunsetApiDTO>,
    required: true,
    default: null
  }
})

const emit = defineEmits(['submit', 'date-updated'])
</script>

<template>
  <form class="flex flex-col gap-3">
    <!-- Datepicker -->
    <DatePicker @date-updated="handleDateUpdated" />
    <!-- Filter -->
    <Dropdown button-text="Filter type" />
    <!-- Terms and conditions -->
    <div class="flex items-center gap-1">
      <input
        id="default-checkbox"
        type="checkbox"
        :value="areTermsAndConditionsAccepted"
        class="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        @change="areTermsAndConditionsAccepted = !areTermsAndConditionsAccepted"
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >I accept the terms and conditions</label
      >
    </div>

    <!-- Submit button -->
    <Button
      text="Get results"
      @click="emit('submit')"
      :is-disabled="!areTermsAndConditionsAccepted"
    />
    <!-- Results -->
    <DaytimeInfoList v-if="props.data" :data="props.data" />
  </form>
</template>
