import { ref } from 'vue'
import { defineStore } from 'pinia'
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'

export const useStore = defineStore('common', () => {
  const daytimeResults = ref<SunriseSunsetApiDTO>()

  function setDaytimeResults(value: SunriseSunsetApiDTO) {
    daytimeResults.value = value
  }

  return { daytimeResults, setDaytimeResults }
})
