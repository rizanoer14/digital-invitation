<template>
  <div class="w-full px-5 mx-auto flex flex-wrap md:flex-row md:flex-nowrap justify-center items-center gap-5">
    <template v-for="(couple, x) in couples" :key="x">
      <ProfilePict :source="couple" />
    </template>
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProfilePict from '@/components/ProfilePict.vue'

const couples = ref(null)
onMounted(() => {
  axios.get('contents/couples.json')
    .then( res => couples.value = res.data.couples )
    .catch( err => alert(err) )
})

</script>
