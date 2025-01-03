<template>
  <section class="w-full bg-rose-surface-1 py-10">
    <div class="lg:w-2/3 lg:mx-auto">
    <HeaderSection title="Galeri" subtitle=""></HeaderSection>
    <div class="w-full px-5">
      <viewer :images="galleries" class="mt-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
          <template
            v-for="src in galleries" :key="src" data-aos="zoom-in">
            <div data-aos="zoom-in">
              <img :src="src" class="w-full rounded-lg" :alt="src" width="328" height="381" />
            </div>
          </template>
        </div>
      </viewer>
      <!-- Our Story -->
      <!-- <OurStory class="mt-10"></OurStory> -->
      <!-- Our Video -->
      <!-- <OurVideo class="mt-10"></OurVideo> -->
    </div>
    </div>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from './HeaderSection.vue';
// import OurVideo from '@/components/OurVideo.vue'
// import OurStory from '@/components/OurStory.vue'

const galleries = ref(null)
onMounted(() => {
  axios.get('contents/galleries.json')
    .then( res => galleries.value = res.data.galleries )
    .catch( err => alert(err) )
})

</script>
