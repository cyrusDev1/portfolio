<template>
  <div id="skills" class="space-y-8 px-60 pb-40 text-white">
    <SectionHeader number="02" title="Skills & Tools" />
    <div class="grid grid-cols-6 gap-6">
      <div class="" v-for="skill in skills">
        <Icon
          :name="skill.name"
          :aria-label="skill.alt"
          class="cursor-pointer font-sans text-green text-7xl hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import SectionHeader from '~/components/ui/SectionHeader.vue';
import { ref } from 'vue';
import Link from '~/components/ui/Link.vue';
const skills = ref([
  { name: 'devicon:html5', alt: 'HTML5' },
  { name: 'devicon:css3', alt: 'CCS5' },
  { name: 'devicon:javascript', alt: 'Javascript' },
  { name: 'devicon:vuejs', alt: 'VueJs' },
  { name: 'devicon:nuxtjs', alt: 'NuxtJs' },
  { name: 'devicon:tailwindcss', alt: 'TailwindCSS' },
  { name: 'devicon:nodejs', alt: 'NodeJs' },
  { name: 'skill-icons:expressjs-light', alt: 'ExpressJs' },
  { name: 'devicon:php', alt: 'PHP' },
  { name: 'logos:symfony', alt: 'Symfony' },
  { name: 'devicon:python', alt: 'Python' },
  { name: 'cib:flask', alt: 'Flask' },
  { name: 'devicon:mysql', alt: 'Mysql' },
  { name: 'devicon:mongodb', alt: 'MongoDB' },
  { name: 'devicon:git', alt: 'GIT' },
  { name: 'devicon:linux', alt: 'Linux' },
  { name: 'devicon:vscode', alt: 'VSCODE' },
  { name: 'devicon:npm-wordmark', alt: 'NPM' },
]);
</script>
