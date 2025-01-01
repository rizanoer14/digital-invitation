<template>
  <section class="w-full bg-rose-surface-1">
    <div class="lg:w-2/3 lg:mx-auto px-5">
      <HeaderSection title="The Love Story" subtitle="Kisah romantis Haris & Citra hingga hari pernikahan"></HeaderSection>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card v-for="(story, index) in stories" :key="index" data-aos="fade-up">
          <template v-slot:body>
            <img :src="story.image" :alt="story.title" class="w-full h-28 md:h-[202px] rounded-lg object-cover" width="260" height="202">
            <p class="dancing-script-font font-bold text-lg mt-2 text-rose-main">{{ story.date }}</p>
            <p class="font-semibold mt-2">{{ story.title }}</p>
            <p class="text-xs text-rose-text-dark mt-4">{{ story.content }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'

const stories = [
  {
    "image": "../story/image-1.png",
    "date": "Mei 2023",
    "title": "Pertemuan Pertama",
    "content": "Haris dan Citra bertemu untuk pertama kalinya di sebuah acara seminar kewirausahaan di Jakarta. Haris memulai percakapan saat keduanya berada di antrean kopi, dan sejak itu komunikasi mereka berlanjut."
  },
  {
    "image": "../story/image-2.png",
    "date": "Januari 2024",
    "title": "Jadian",
    "content": "Di momen ulang tahun Citra, Haris memberanikan diri untuk menyatakan perasaannya. Citra menerima, dan mereka resmi berpacaran."
  },
  {
    "image": "../story/image-3.png",
    "date": "Februari 2023",
    "title": "Lamaran",
    "content": "Di momen ulang tahun Citra, Haris memberanikan diri untuk menyatakan perasaannya. Citra menerima, dan mereka resmi berpacaran."
  },
  {
    "image": "../story/image-4.png",
    "date": "April 2024",
    "title": "Hari Pernikahan",
    "content": "Haris dan Citra mengikat janji suci mereka di hadapan keluarga dan sahabat, memulai babak baru sebagai pasangan suami istri."
  }
]

</script>
