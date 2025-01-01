<template>
  <section style="max-height: 400px" class="bg-rose-surface-1 overflow-y-auto flex flex-col gap-y-4 px-5 py-4 mt-4">
    <template v-for="(msg, x) in messages" :key="x">
      <div class="bg-rose-surface-2 px-5 py-4 rounded-lg">
        <p>{{ msg.guestMessage }}</p>
        <p class="text-sm font-semibold mt-4 text-rose-main">{{ msg.guestName }}</p>
        <p class="text-xs text-gray-tertiary mt-2">{{ msg.timestamp }}</p>
        
      </div>
    </template>
  </section>
</template>

<script setup>

const props = defineProps({
  messages: {
    type: Array
  }
})

</script>
