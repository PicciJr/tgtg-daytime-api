<script setup lang="ts">
import { SunriseSunsetApiDTO } from '@/Daytime/Dtos/SunriseSunsetApiDTO'
import { defineProps, PropType } from 'vue'
import DaytimeInfo from './DaytimeInfo.vue'

defineProps({
  data: {
    type: Object as PropType<SunriseSunsetApiDTO>,
    default: null
  }
})
</script>

<template>
  <ul
    class="flex flex-col gap-3 list-disc"
    v-for="(item, index) in Object.entries(data)"
    :key="index"
  >
    <li class="flex gap-2">
      <DaytimeInfo :label="item[0]" :value="item[1]" />
    </li>
  </ul>
</template>
