<template>
  <div class="px-12 py-4 shadow-2xl flex items-center justify-between">
    <div class="">
      <a class="" href="/">
        <Icon
          name="tabler:hexagon-letter-c"
          class="font-sans text-green text-5xl bg-green-800"
        />
      </a>
    </div>
    <div class="font-mono text-lightest-slate">
      <ul class="flex space-x-4">
        <li v-for="(link, index) in links">
          <a
            :href="link.href"
            class="p-2 space-x-1 text-sm hover:text-green ease-out duration-150"
          >
            <span class="text-green">0{{ index + 1 }}.</span>
            <span>{{ link.name }}</span>
          </a>
        </li>
        <li class="">
          <Link href="#" class="py-3 px-4"> Resume </Link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Link from '~/components/ui/Link.vue';
const links = ref([
  { href: '#', name: 'About' },
  { href: '#', name: 'Skills' },
  { href: '#', name: 'Work' },
  { href: '#', name: 'Contact' },
]);
</script>

<style></style>
