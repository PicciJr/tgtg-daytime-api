<script setup lang="ts">
import { defineProps, onBeforeMount, ref } from 'vue'
import useDaytimeProvider from '@/Daytime/Application/useDaytimeProvider'
import SunriseSunsetApi from '@/Daytime/Infrastructure/SunriseSunsetApi'
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'
import { useLocationProvider } from '../composables/useLocationProvider'
import { useStore } from '@/stores'
import { inject } from 'vue'

const props = defineProps({
  date: {
    type: String,
    default: null
  }
})

const latitude = ref(null)
const longitude = ref(null)
const store = useStore()
const daytimeRepository = inject('daytimeRepository') as SunriseSunsetApi

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
  if (props.date) daytimeRepository.withDate(props.date)
  try {
    loading.value = true
    const response = await useDaytimeProvider<SunriseSunsetApiDTO>(
      daytimeRepository,
      latitude.value,
      longitude.value
    )
    if (response.status === 'OK') {
      data.value = response.results
      store.setDaytimeResults(response.results)
      error.value = null
    }
    loading.value = false
  } catch (err) {
    error.value = err
    loading.value = false
  }
}
</script>

<template>
  <slot :data="data" :error="error" :loading="loading" :getResults="fetchSunLightTimes" />
</template>
