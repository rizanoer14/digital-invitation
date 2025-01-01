<template>
  <button 
    @click="clipboard"
    class="text-rose-main font-semibold md:mt-2 lg:mt-0">
    {{isCopy ? "Disalin" : "Salin"}}
  </button>
</template>

<script setup>

import { ref } from 'vue'

let isCopy = ref(false);
const textContent = ref( props.content )

const props = defineProps({
  content: {
    type: String,
    default: 'Example'
  }
})

const clipboard = () => {
  navigator.clipboard.writeText(props.content)
    .then( 
      res =>  {
        textContent.value = 'Disalin' 
        isCopy.value = true;
        
      }
    )
    .catch( err => {
      isCopy.value = false
    })

    setTimeout(() => {
      isCopy.value = false
    }, 2000);
}

</script>
