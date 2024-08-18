<template>
  <div id="about" class="mt-20 space-y-8 pt-20 px-60 pb-40 text-white">
    <SectionHeader number="01" title="About Me" />
    <div class="flex gap-20 w-full">
      <div class="space-y-3 w-1/2">
        <p class="text-slate text-lg">
          Hello! My name is Cyrus, and I am passionate about creating web-based
          projects that make an impact. My journey into web development began
          with a desire to build an application that would enhance the level of
          national football.
        </p>

        <p class="text-slate text-lg">
          Since then, I have honed my skills in both front-end and back-end
          development, focusing on crafting responsive, user-friendly interfaces
          and robust, scalable systems. I enjoy turning ideas into functional
          and engaging web experiences, and I’m always excited to tackle new
          challenges and collaborate on innovative projects.
        </p>

        <p class="text-slate text-lg">
          I’m committed to continuous learning and keeping up with the latest
          industry trends. I value collaboration and strive to create solutions
          that not only meet but exceed expectations, aiming to deliver results
          that truly make a difference.
        </p>
      </div>
      <div class="bg-red-500 relative cursor-pointer">
        <img
          class="w-full h-full object-cover relative z-10"
          src="~/assets/img/me.png"
          alt=""
          srcset=""
        />
        <div
          class="hidden bg-green absolute w-full transition ease-in-out duration-2000 h-full opacity-50 top-0 z-20"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SectionHeader from '~/components/ui/SectionHeader.vue';
</script>
