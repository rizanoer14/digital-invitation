<template>
  <section ref="opening" class="fixed top-0 left-0 right-0 bottom-0 w-full bg-rose-surface-1 z-50">
    <div class="absolute top-0 left-0 right-0">
      <img src="../assets/images/decoration/welcome-ornament-top.webp" alt="" class="w-full h-auto" width="446" height="124">
    </div>
    <section class="h-screen py-30 lg:py-35 lg:mx-auto">
      <div class=" flex flex-col items-center justify-center gap-y-5 h-screen lg:relative lg:z-20">
        <img src="../assets/images/decoration/welcome-flower.webp" class="w-28 h-auto" alt="Welcome Flower" width="115" height="102" data-aos="fade-up">
        <div class="w-20 h-20 rounded-full flex items-center justify-center border border-rose-border-2 dancing-script-font text-3xl font-bold" data-aos="fade-up" data-aos-delay="300">
          {{ initial.join('')}}
        </div>
          <h1 class="dancing-script-font text-6xl font-bold text-center leading-120" data-aos="fade-up" data-aos-delay="600">
            <span class="lg:hidden">
              {{ couples[0]}} <br/> & <br/> {{ couples[1] }}
            </span>
            <span class="hidden lg:block">
              {{ couples[0]}} & {{ couples[1] }}
            </span>
          </h1>
          <button type="button" @click="openInvitation()" class="bg-rose-main text-white px-5 py-4 rounded-full">Buka Undangan</button>
      </div>
    </section>
    <div class="absolute bottom-0 left-0 right-0">
      <img src="../assets/images/decoration/welcome-ornament-bottom.webp" alt="" class="w-full h-auto" width="446" height="124">
    </div>
  </section>
  <MiniButton :soundOn="isPlayed"></MiniButton>
</template>

<script setup>
import { ref } from 'vue';
import MiniButton from '@/components/MiniButton.vue'
const couples = ref(['Haris', 'Citra']);
const initial = ref(['H', 'C']);
const opening = ref(null);
let isPlayed = false
function openInvitation() {
  let element = opening.value;

  element.classList.add("-left-[1000px]", "opacity-0", "duration-500", "-z-10");
}
</script>
