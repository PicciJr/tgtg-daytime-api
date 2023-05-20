<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  }
})

const mappedLabel = computed(() => {
  const dayTimes = {
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    first_light: 'First light',
    last_light: 'Last light',
    dawn: 'Dawn',
    dusk: 'Dusk',
    solar_noon: 'Solar noon',
    golden_hour: 'Golden hour',
    day_length: 'Day length',
    timezone: 'Timezone'
  }
  return dayTimes[props.label]
})
</script>

<template>
  <label class="font-bold">{{ mappedLabel }}:</label>
  <span>[{{ value }}]</span>
</template>
