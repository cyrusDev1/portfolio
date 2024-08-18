<template>
  <div class="bg-navy">
    <slot></slot>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';

useHead({
  title: 'Cyrus Houngue',
});
</script>

<style scoped></style>
