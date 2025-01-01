<template>
  <MainCover id="mainCover"></MainCover>
  <Verse></Verse>
  <GroomBride></GroomBride>
  <FirstSight></FirstSight>
  <Timelines v-on:goToGuestBook="navigationHandler('#guest-book')"></Timelines>
  <img src="../assets/images/big-image.webp" class="w-full h-auto" alt="Wedding image" width="1366" height="669">
  <Envelope id="envelope"></Envelope>
  <OurGallery></OurGallery>
  <GuestBook id="guest-book"></GuestBook>
  <OurVideo></OurVideo>
  <footer class="relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0">
      <img src="../assets/images/decoration/welcome-ornament-top.webp" alt="" class="w-full h-auto" width="446" height="124" data-aos="fade-up">
    </div>
    <section class="container-section h-screen py-30">
      <div class="h-screen flex flex-col items-center justify-center gap-y-5">
        <img src="../assets/images/decoration/welcome-flower.webp" class="w-28 h-auto" alt="Welcome Flower" width="115" height="102" data-aos="fade-up" data-aos-delay="300">
        <div class="w-20 h-20 rounded-full flex items-center justify-center border border-rose-border-2 dancing-script-font text-3xl font-bold" data-aos="fade-up" data-aos-delay="600">
          {{ initial.join('')}}
        </div>
        <h2 class="dancing-script-font text-6xl text-center w-60 mt-10" data-aos="fade-up" data-aos-delay="600">Terima Kasih</h2>
        <a href="#verse" class="bg-rose-main text-white px-5 py-4 rounded-full mt-10 w-60 text-center" data-aos="fade-up" data-aos-delay="900">Kembali Ke Atas</a>
      </div>
    </section>
    <div class="absolute bottom-0 left-0 right-0" data-aos="fade-up" data-aos-delay="1000">
      <img src="../assets/images/decoration/welcome-ornament-bottom.webp" alt="" class="w-full h-auto" width="446" height="124">
    </div>
  </footer>
  <div class="bg-rose-surface-2 text-center text-sm p-2">Merid 2024</div>
</template>

<script setup>
import { ref } from 'vue'

import MainCover from '@/components/MainCover.vue'
import Verse from '@/components/Verse.vue'
import FirstSight from '@/components/FirstSight.vue'
import GroomBride from '@/components/GroomBride.vue'
import Timelines from '@/components/Timelines.vue'
import OurGallery from '@/components/OurGallery.vue'
import Envelope from '@/components/Envelope.vue'
import OurVideo from '@/components/OurVideo.vue'

const couples = ref(['Haris', 'Citra']);
const initial = ref(['H', 'C']);

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>
