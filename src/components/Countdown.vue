<template>
  <div class="my-5">
    <div class="flex justify-center md:w-6/12 md:mx-auto gap-3">
      <template v-for="(value, name, index) in countdown" :key="index">
        <div 
          data-aos="zoom-in"
          class="text-center w-3/12">
            <div class="w-[60px] h-[60px] rounded-full bg-rose-main flex items-center justify-center dancing-script-font text-gray-white text-2xl mx-auto">
              {{ value }}
            </div>
          <p class="text-sm text-gray-tertiary mt-2 capitalize">{{ name }}</p>
        </div>
      </template>
    </div>

    <div class="flex justify-center">
      <button type="button" class="bg-rose-main text-gray-white rounded-full flex items-center gap-x-2 px-5 py-2 font-semibold mt-5" data-aos="fade-up">
        <i class="bx bx-calendar bx-sm"></i>
        Simpan di Kalender
      </button>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const countdown = ref(null)

// Handler for countdown
const createTimer = (target, container, cb) => {
   // target => UNIX time target
   // Container => variable for return result
   // cb => callback if countdown finish

   const now = new Date().getTime()
   const distance = target - now
   if ( distance > 0 ) {
     const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
     const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const detik = Math.floor((distance % (1000 * 60)) / 1000);
      
     container.value = { hari, jam, menit, detik }
     //alert(JSON.stringify(container))
      
     if (hari === 0 && jam === 0 && menit === 0 && detik === 0 ) cb()
   } else {
     container.value = { hari: 0, jam: 0, menit: 0, detik: 0 }
   } 
}

const timer = setInterval(() => {
  createTimer(new Date('2027-02-24 08:00').getTime(), countdown, () => {
    clearInterval(timer)
  })
}, 1000)



</script>
