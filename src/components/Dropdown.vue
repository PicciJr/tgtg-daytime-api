<template>
  <div class="w-44">
    <button
      class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      type="button"
      @click="toggleDropdown"
    >
      {{ buttonText }}
      <svg
        class="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <div
      :class="[
        'bg-white text-base rounded shadow-sm mt-2 py-2 px-4',
        { hidden: !isDrowdownVisible }
      ]"
      id="dropdown"
    >
      <ul class="p-2 space-y-3" aria-labelledby="dropdown">
        <li v-for="(item, index) in items" :key="index">
          <button>{{ item }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  },
  buttonText: {
    type: String,
    default: 'Dropdown button'
  },
  items: {
    type: Array,
    default: () => ['item1', 'item2']
  }
})

const isDrowdownVisible = ref(false)

const toggleDropdown = () => {
  isDrowdownVisible.value = !isDrowdownVisible.value
}
</script>
