<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DaytimeProvider from './components/DaytimeProvider.vue'
import DaytimeForm from './components/DaytimeForm.vue'
import { useLocationProvider } from './composables/useLocationProvider'
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['get-results'])
const date = ref(null)

const setDate = (dateSelected: string) => (date.value = dateSelected)
</script>

<template>
  <div class="flex flex-col max-w-2xl gap-4 p-4 mx-auto mt-24 border rounded-lg bg-green-50">
    <!-- Daytime provider -->
    <DaytimeProvider :date="date" v-slot="{ getResults, data }">
      <DaytimeForm :data="data" @submit="getResults" @date-updated="setDate" />
    </DaytimeProvider>
  </div>
</template>
