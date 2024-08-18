<template>
  <nuxt-link
    :to="to"
    class="hover:shadow-3xl border border-green text-green rounded text-sm ease-out duration-150 hover:transform hover:-translate-x-1 hover:-translate-y-1"
    :class="class"
  >
    <slot />
  </nuxt-link>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  class: {
    type: [String, Object],
    required: false,
  },
});
</script>
