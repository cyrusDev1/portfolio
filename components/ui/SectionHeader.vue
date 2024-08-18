<template>
  <div>
    <div
      class="p-2 flex items-center space-x-5 hover:text-green ease-out duration-150"
    >
      <div class="space-x-3">
        <span class="text-xl text-green font-mono">{{ number }}.</span>
        <span class="text-3xl font-bold text-lightest-slate">{{ title }}</span>
      </div>
      <div class="w-64 border-t border-lightest-navy h-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
