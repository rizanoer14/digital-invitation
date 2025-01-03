<template>
  <div class="px-5 pb-10 bg-rose-surface-1">
    <div class="lg:w-2/3 lg:mx-auto">
    <HeaderSection title="Livestream" /> 
    <!-- <VueVideoPlayer data-aos="zoom-in" class="w-10/12 mx-auto" :src="source" /> -->
    <iframe width="1200" height="723" class="w-full h-[400px] lg:h-[562px]" :src="source" title="Pernikahan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  </div>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

const source = 'https://www.youtube.com/embed/aYbUY6JGpbM?si=kE2rG_qyq7p8CEu3'

</script>
