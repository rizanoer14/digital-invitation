
<template>
  <main class="app overflow-x-hidden scroll-smooth bg-rose-surface-1">
    <router-view></router-view>
  </main> 
</template> 
 
<script setup>

import AOS from 'aos'
import { onMounted } from 'vue'


onMounted(() => {
  AOS.init({
    delay: '200'
  })
})

</script>
