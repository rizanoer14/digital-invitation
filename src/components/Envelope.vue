<template>
  <section class="w-full bg-rose-surface-1 py-10">
    <div class="lg:w-2/3 lg:mx-auto px-5">
      <HeaderSection title="Tanda Cinta Dari Anda" subtitle="Kehadiran dan doa Anda adalah anugerah terbaik bagi kami. Namun, bagi yang ingin meninggalkan pesan cinta dalam bentuk lain, berikut informasinya"></HeaderSection>
  
        <div class="flex flex-col md:flex-row gap-4">
          <template v-for="(wallet, index) in wallets" :key="x">
            <div data-aos="zoom-in" :class="'w-full rounded-3xl flex md:flex-col lg:flex-row items-start justify-between md:justify-start lg:justify-between p-5 bg-rose-surface-2 ' + (index < 2 ? 'lg:items-center' : '')">
              <div class="flex md:flex-col lg:flex-row items-start gap-x-3">
                <img :src="wallet.thumb" :alt="wallet.platform" class="w-11 h-auto" width="44" height="32">
                <div class="mt-4 lg:mt-0">
                  <p class="font-semibold">{{ wallet.number }}</p>
                  <p class="text-xs text-gray-tertiary mt-1">{{ wallet.name }}</p>
                </div>
              </div>
              <Clipboard :content="wallet.number"></Clipboard>
            </div>
          </template>
        </div>
      </div>
    </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    thumb: 'wallets/mandiri.png',
    platform: 'Mandiri',
    name: 'Citra Khairunissa',
    number: '551234567890',
    prefix: 'rekening'
  },
  {
    thumb: 'wallets/bca.png',
    platform: 'BCA',
    name: 'Citra Khairunissa',
    number: '449123456789',
    prefix: 'rekening'
  },
  {
    thumb: 'wallets/present.png',
    platform: 'Present',
    name: 'Jl. Melati Indah No. 15, Kelurahan Cempaka Putih Timur, Kecamatan Cempaka Putih, Jakarta Pusat 10510',
    number: 'Kirim Hadiah',
    prefix: 'present'
  }
]
</script>
