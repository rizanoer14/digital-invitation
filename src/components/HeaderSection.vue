<template>
  <section data-aos="fade-up" :class="props.textColor" class="w-full px-4 mb-6 mx-auto text-center">
    <div class="flex items-center justify-center gap-x-4" data-aos="fade-down">
      <img src="../assets/images/decoration/title-ornament.webp" class="w-20 h-auto" alt="Ornament" width="80" height="12">
      <h2 class="dancing-script-font text-3xl font-extrabold">{{ props.title }}</h2>
      <img src="../assets/images/decoration/title-ornament.webp" class="w-20 h-auto rotate-180" alt="Ornament" width="80" height="12">
    </div>
    <p class="text-sm text-gray-tertiary mt-2 text-center" v-if="subtitle != ''" data-aos="fade-up">{{ subtitle }}</p>
  </section>
</template>

<script setup>

import decoration from '@/assets/svg/decoration-2.svg'

const props = defineProps({
  title: {
    type: String,
    // default: 'The Section'
  }, 
  subtitle: {
    type: String,
    // default: 'Duis splople autem vel eum iriure Dapibus sit amet, tincidunt eu, nibh.'
  },
  textColor: {
    type: String,
    // default: 'text-slate-800'
  }
})

</script>
