<template>
  <audio ref="audioEl" autoplay loop>
    <source src="@/assets/audio/backsound.mp3" type="audio/mp3">
  </audio>
  <div class="fixed bottom-8 right-8 z-50">
    <button class="w-10 h-10 flex items-center justify-center rounded-full bg-rose-surface-2 border border-rose-border-2 text-rose-text-dark shadow-md" @click="control" aria-label="Play Music">
      <i v-if="!isPlayed" class="bx bxs-volume-mute bx-sm"></i>
      <i v-else class="bx bxs-volume-full bx-sm"></i>
    </button>
    <!-- <button @click="giftAction" class="button">
      <i class="fa-solid fa-gift"></i>
    </button> -->
  </div>
</template>

<script setup>

import { ref, computed, watch, onMounted } from 'vue'
import { useState } from '@/stores/state.js'

const state = useState()

const audioEl = ref(null)
const isPlayed = ref(false)

const isAudioPlay = computed(() => state.isAudioPlay)

const audioClick = () => isPlayed.value = !isPlayed.value
const audioAction = () => isPlayed.value ? audioEl.value.play() : audioEl.value.pause()

const control = () => {
  audioClick()
  audioAction()
}

watch(isAudioPlay, control)

// const giftAction = () => setTimeout(() => { document.querySelector('#envelope').scrollIntoView({ behavior: 'smooth' }) }, 300)

</script>
