<script setup lang="ts">
import DatePicker from './DatePicker.vue'
import Dropdown from './Dropdown.vue'
import Button from './Button.vue'
import DaytimeInfoList from './DaytimeInfoList.vue'
import { computed, defineEmits, defineProps, PropType, ref } from 'vue'
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'
import { DropdownItem } from './Dropdown.vue'
import ErrorMessage from './ErrorMessage.vue'

const areTermsAndConditionsAccepted = ref(false)

const areFilterOptionsDisabled = computed(() => !props.data)

const handleDateUpdated = (dateSelected) => {
  emit('date-updated', dateSelected)
}

const handleGetResults = () => {
  resetFilterApplied()
  emit('submit')
}

const resetFilterApplied = () => (filterKey.value = null)

const props = defineProps({
  data: {
    type: Object as PropType<SunriseSunsetApiDTO>,
    default: null
  },
  error: {
    type: Object,
    default: null
  },
  loading: {
    type: Boolean,
    default: true
  }
})

const filteredData = computed(() => {
  if (filterKey.value && props.data) {
    const [key, value] = Object.entries(props.data).filter((item) => item[0] === filterKey.value)[0]
    return { [key]: value }
  }
  return { ...props.data }
})

const filterKey = ref(null)

const handleFilterDayTimeData = (filterKeySelected: string) => (filterKey.value = filterKeySelected)

const dayTimeOptions = ref<DropdownItem[]>([
  {
    id: 'sunrise',
    value: 'Sunrise'
  },
  {
    id: 'sunset',
    value: 'Sunset'
  },
  {
    id: 'dawn',
    value: 'Dawn'
  },
  {
    id: 'dusk',
    value: 'Dusk'
  },
  {
    id: 'first_light',
    value: 'First light'
  },
  {
    id: 'last_light',
    value: 'Last light'
  },
  {
    id: 'golden_hour',
    value: 'Golden hour'
  }
])

const emit = defineEmits(['submit', 'date-updated'])
</script>

<template>
  <form class="flex flex-col items-center gap-3 text-white sm:items-start">
    <!-- Logo image -->
    <img loading="lazy" src="../assets/img/tgtg-logo.svg" class="self-center w-48 h-48" />
    <!-- Datepicker -->
    <DatePicker @date-updated="handleDateUpdated" class="w-fit" />
    <!-- Filter -->
    <Dropdown
      button-text="Filter type"
      :items="dayTimeOptions"
      :is-disabled="areFilterOptionsDisabled"
      @click="handleFilterDayTimeData"
    />
    <!-- Terms and conditions -->
    <div class="flex items-center gap-1">
      <input
        id="default-checkbox"
        type="checkbox"
        :checked="areTermsAndConditionsAccepted"
        class="w-4 h-4 border-gray-300 rounded text-tgtg-light bg-tgtg-dark focus:ring-gray-500 focus:ring-2"
        @change="areTermsAndConditionsAccepted = !areTermsAndConditionsAccepted"
      />
      <label for="default-checkbox" class="ml-2 text-sm font-medium text-white"
        >I accept the terms and conditions</label
      >
    </div>

    <!-- Submit button -->
    <Button
      text="Get results"
      @click="handleGetResults"
      :is-disabled="!areTermsAndConditionsAccepted || loading"
      :is-loading="loading"
      id="submit-button"
    />
    <!-- Results -->
    <DaytimeInfoList v-if="!error" :data="filteredData" />
    <!-- Error  message-->
    <ErrorMessage
      v-else
      message="Oooops, there was an issue retrieving the data. Please try again later"
    />
  </form>
</template>
