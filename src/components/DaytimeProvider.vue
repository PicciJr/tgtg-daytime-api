<script setup lang="ts">
import { defineProps, ref } from 'vue'
import useDaytimeProvider from '@/Daytime/Application/useDaytimeProvider'
import SunriseSunsetApi from '@/Daytime/Infrastructure/SunriseSunsetApi'
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'

const props = defineProps({
  lat: {
    type: Number,
    required: true,
    default: 38.907192
  },
  lng: {
    type: Number,
    required: true,
    default: -77.036873
  },
  date: {
    type: String,
    required: true,
    default: null
  }
})

const data = ref(null)
const loading = ref(false)

const fetchSunLightTimes = async () => {
  const daytimeRepository = new SunriseSunsetApi()
  if (props.date) daytimeRepository.withDate(props.date)
  const response = await useDaytimeProvider<SunriseSunsetApiDTO>(
    daytimeRepository,
    props.lat,
    props.lng
  )
  if (response.status === 'OK') data.value = response.results
}
</script>

<template>
  <slot :data="data" :loading="loading" :getResults="fetchSunLightTimes" />
</template>
