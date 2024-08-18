<template>
  <div class="px-52 py-20">
    <div class="space-y-5">
      <div>
        <span class="font-mono text-green">Hi, my name is</span>
      </div>
      <div class="">
        <h2 class="text-lightest-slate leading-snug text-7xl font-bold">
          Cyrus Houngue.
        </h2>
        <h3 class="text-slate text-6xl font-bold">
          I can center a div, no problem.
        </h3>
      </div>
      <div>
        <p class="text-slate text-lg w-2/3">
          Developer with a strong interest in both front-end and back-end
          technologies. I love turning ideas into functional and user-friendly
          web experiences, from crafting responsive interfaces to building
          reliable back-end systems. Let's create something great together!
        </p>
      </div>
    </div>
    <div class="mt-16">
      <Link href="#" class="px-8 py-4 text-lg font-mono"
        >Check out my resume!</Link
      >
    </div>
  </div>
</template>

<script setup>
import Link from '~/components/ui/Link.vue';
</script>
