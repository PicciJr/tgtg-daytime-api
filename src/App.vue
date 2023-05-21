<script setup lang="ts">
import DaytimeProvider from './components/DaytimeProvider.vue'
import DaytimeForm from './components/DaytimeForm.vue'
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['get-results'])
const date = ref(null)

const setDate = (dateSelected: string) => (date.value = dateSelected)
</script>

<template>
  <div class="flex flex-col max-w-xl gap-4 p-4 mx-auto mt-24 border rounded-lg bg-tgtg-dark">
    <!-- Daytime provider -->
    <DaytimeProvider :date="date" v-slot="{ getResults, data, error, loading }">
      <DaytimeForm
        :loading="loading"
        :data="data"
        :error="error"
        @submit="getResults"
        @date-updated="setDate"
      />
    </DaytimeProvider>
  </div>
</template>
