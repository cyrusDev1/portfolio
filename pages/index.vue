<template>
  <div class="">
    <div class="">
      <Header></Header>
    </div>
    <main>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </main>
  </div>
</template>
<script setup>
import Header from '~/components/common/Header.vue';
import Banner from '~/components/Banner.vue';
import About from '~/components/About.vue';
import Skills from '~/components/Skills.vue';
</script>
