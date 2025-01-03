<template>
  <div 
    class="w-full md:w-6/12 mt-16 mb-6">
    <div class="relative flex justify-center bg-rose-surface-2 p-5 min-h-[350px] rounded-3xl lg:h-[464px]" data-aos="flip-left">
      <img src="../assets/images/ornament-person.webp" :class="'absolute w-28 lg:w-44 h-auto -top-12 ' + (source.gender == 'man' ? '-right-10 md:-left-5 md:rotate-90 lg:rotate-90' : '-left-10 md:left-auto md:right-0 lg:-right-10 lg:rotate-0')" alt="Ornament" width="108" height="90">
      <img data-aos="zoom-in" class="absolute bottom-0 w-60 lg:w-80 h-auto mx-auto" :src="source.thumb" :alt="source.thumb">
    </div>
    <div data-aos="slide-up" class="mt-5">
      <p class="dancing-script-font text-3xl">{{ source.shortName }}</p>
      <p class="mt-2">{{ source.name }}</p>
      <p class="text-gray-tertiary text-xs mt-2">{{source.gender == 'male' ? "Putra" : "Putri"}} dari {{ source.parents[0] }} & {{ source.parents[1] }}</p>
      <div class="flex gap-4 mt-2">
        <template v-for="(item, x) in source.sosmed" :key="x">
          <a target="_blank" class="text-rose-main" :href="item.link" aria-label="Social Media"><i :class="item.icon"></i></a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  source: {
    type: Object,
    default: { name: 'fulan' }
  }
})

</script>
