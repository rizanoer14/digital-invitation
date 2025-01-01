<template>
  <section class="w-full bg-rose-surface-1 py-10">
    <div class="lg:w-2/3 lg:mx-auto px-5">
      <HeaderSection title="The Moment" subtitle="Kami mengundang Anda di hari bahagia kami"></HeaderSection>
      <Countdown></Countdown>
      <Card>
        <template v-slot:body>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="border border-rose-main rounded-tl-[200px] rounded-tr-[200px]" v-for="(timeline, index) in timelines" :key="index">
            <section data-aos="fade-up">
              <div class="flex items-center justify-center bg-pattern bg-no-repeat h-28 rounded-tl-[200px] rounded-tr-[200px] border border-rose-main">
                <div class="flex items-center justify-center rounded-full px-5 py-2 font-bold text-sm text-rose-text-dark bg-rose-surface-1 shadow-sm">
                  <img src="../assets/svg/ring.svg" alt="Ring" width="24" height="24">
                  {{ timeline.title }}
                </div>
              </div>
              <img :src="timeline.image" class="w-full h-[260px] object-cover border-x border-rose-main" alt="" width="480" height="260">
              <div class="px-5 pb-4 mt-4">
                <p class="font-semibold">{{ timeline.day }}</p>
                <p class="dancing-script-font text-2xl text-rose-main font-bold mt-2">{{ timeline.date }}</p>
                <p class="mt-2">{{ timeline.time }}</p>
                <p class="mt-4 font-semibold">{{ timeline.location }}</p>
                <p class="text-gray-tertiary text-sm mt-2">{{ timeline.address }}</p>
                
                <div class="mt-4">
                  <div class="flex items-center justify-between text-sm">
                    <p class="font-semibold">Dress Code</p>
                    {{ timeline.dressCode[0] }}
                  </div>

                  <div class="flex items-start mt-2 gap-x-6">
                    <div class="w-14" v-for="(outfit, index) in timeline.dressCode.slice(1)" :key="'outfit-' + index">
                      <div class="w-9 h-9 rounded-full border border-rose-main" :style="'background-color:' + outfit[1] + ';'"></div>
                      <p class="mt-2 text-sm text-gray-tertiary">{{ outfit[0] }}</p>
                    </div>
                  </div>
                  
                </div>
                <a class="inline-block bg-rose-main text-gray-white mt-4 rounded-full px-5 py-2 font-semibold" href="">
                  Lihat Lokasi
                </a>
              </div>
            </section>
          </div>
        </div>
        </template>
        <!-- <template v-slot:footer>
          <section class="bg-gray-900"> -->
            
            <!-- Button to Guest Book -->
            <!-- <div class="px-6 pt-5 pb-8 text-center">
              <p class="text-sm text-gray-100">Konfirmasi kehadiran anda pada buku tamu</p>
              <button @click="goToGuestBook" class="btn">
                <i class="fa-solid fa-clipboard-check"></i>
                Konfirmasi
              </button>
            </div>
            <img src="@/assets/images/couples.png" alt="">
          </section>
        </template> -->
      </Card>
    </div>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from './HeaderSection.vue'
import Card from '@/components/Card.vue'
import Countdown from '@/components/Countdown.vue'

const timelines = ref(null)
onMounted(() => {
  axios.get('contents/timelines.json')
    .then( res => timelines.value = res.data.timelines )
    .catch( err => alert(err) )
})

// Handler for navigate to guest book
const emits = defineEmits(['goToGuestBook'])

const goToGuestBook = () => setTimeout(() => { emits('goToGuestBook') }, 300)

</script>
