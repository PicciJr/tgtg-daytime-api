<template>
  <div>
    <button
      :class="[
        'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center',
        { 'cursor-not-allowed opacity-30': isDisabled }
      ]"
      type="button"
      @click.prevent="toggleDropdown"
      :disabled="isDisabled"
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
      v-show="isDrowdownVisible"
      class="px-4 py-2 mt-2 text-base font-bold rounded shadow-sm bg-tgtg-light text-tgtg-dark"
      id="dropdown"
    >
      <ul class="p-2 space-y-3" aria-labelledby="dropdown">
        <li v-for="(item, index) in items" :key="index">
          <button @click.prevent="emit('click', item.id)">{{ item.value }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref } from 'vue'

export type DropdownItem = {
  id: string
  value: string
}

defineProps({
  buttonText: {
    type: String,
    default: 'Dropdown button'
  },
  items: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [
      {
        id: 1,
        value: 'item 1'
      }
    ]
  },
  isDisabled: {
    type: Boolean,
    default: true
  }
})

const isDrowdownVisible = ref(false)

const emit = defineEmits(['click'])

const toggleDropdown = () => {
  isDrowdownVisible.value = !isDrowdownVisible.value
}
</script>
