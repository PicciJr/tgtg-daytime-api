<script setup lang="ts">
import { defineProps, ref } from 'vue'
import useDaytimeProvider from '@/Daytime/Application/useDaytimeProvider'
import SunriseSunsetApi from '@/Daytime/Infrastructure/SunriseSunsetApi'
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'
import { useLocationProvider } from '../composables/useLocationProvider'

const props = defineProps({
  date: {
    type: String,
    required: true,
    default: null
  }
})
const { lat, lng } = useLocationProvider().getCurrentPosition()
const data = ref(null)
const loading = ref(false)

const fetchSunLightTimes = async () => {
  const daytimeRepository = new SunriseSunsetApi()
  if (props.date) daytimeRepository.withDate(props.date)
  const response = await useDaytimeProvider<SunriseSunsetApiDTO>(daytimeRepository, lat, lng)
  if (response.status === 'OK') data.value = response.results
}
</script>

<template>
  <slot :data="data" :loading="loading" :getResults="fetchSunLightTimes" />
</template>
