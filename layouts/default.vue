<template>
  <div class="bg-navy h-screen">
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
