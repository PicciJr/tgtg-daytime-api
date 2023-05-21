<script setup lang="ts">
import { defineProps, onBeforeMount, ref } from 'vue'
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

const latitude = ref(null)
const longitude = ref(null)

onBeforeMount(() => {
  useLocationProvider()
    .getCurrentPosition()
    .then(({ lat, lng }) => {
      latitude.value = lat
      longitude.value = lng
      loading.value = false
    })
})

const data = ref(null)
const error = ref(null)
const loading = ref(true)

const fetchSunLightTimes = async () => {
  const daytimeRepository = new SunriseSunsetApi()
  if (props.date) daytimeRepository.withDate(props.date)
  try {
    const response = await useDaytimeProvider<SunriseSunsetApiDTO>(
      daytimeRepository,
      latitude.value,
      longitude.value
    )
    if (response.status === 'OK') {
      data.value = response.results
      error.value = null
    }
  } catch (err) {
    error.value = err
  }
}
</script>

<template>
  <slot :data="data" :error="error" :loading="loading" :getResults="fetchSunLightTimes" />
</template>
