<style scoped>
input, textarea, select, option {
  @apply w-full px-5 py-2 mt-2 rounded-lg bg-rose-surface-1 border border-rose-border-2 outline-none placeholder:text-gray-tertiary;
} 

</style>

<template>
  <section class="w-full bg-rose-surface-2 py-10">
    <section class="px-5">
      <HeaderSection title="Wishes" subtitle="" />
      <!-- Form -->
      <form 
        ref="form"
        @submit="sendMessage"
        class="mt-4 px-5 py-4 bg-rose-surface-1 rounded-lg">
        <!-- Alert -->
        <Alert :statusResponse="statusResponse" :showAlert="showAlert" v-on:close="showAlert = false" />
        <!-- Guest Name -->
        <div data-aos="zoom-in">
          <label for="GuestName" class="poppins-font">Nama</label>
          <input v-model="GuestName" placeholder="Contoh: Kevin" name="GuestName" id="GuestName" type="text" required>
        </div>
        <!-- Guest Status -->
        <!-- <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestStatus">Kehadiran</label>
          <select v-model="GuestStatus" name="GuestStatus" id="GuestStatus" required>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
        </div> -->
        <!-- Guest Message -->
        <div class="mt-4" data-aos="zoom-in">
          <label for="GuestMessage" class="poppins-font">Pesan</label>
          <textarea placeholder="Tuliskan pesan anda disini" v-model="GuestMessage" name="GuestMessage" id="GuestMessage" cols="30" rows="5" required></textarea>
        </div>
        {{ query }}
        <!-- Submit -->
        <button
          class="w-full bg-rose-main text-gray-white mt-6 rounded-full px-5 py-2 font-semibold pointer" type="submit">
          Kirim Ucapan
        </button>
      </form>
      <!-- Gift Section -->
      <Gift></Gift>
      <!-- Message Box -->
      <MessagesBox :messages="messages"></MessagesBox>
      <!-- Frames -->
    </section>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeaderSection from '@/components/HeaderSection.vue'
import Alert from '@/components/Alert.vue'
import MessagesBox from '@/components/MessagesBox.vue';

//import Gift from '@/components/Gift.vue'

// Form handler
const form = ref(null)
const GuestName = ref(null)
const GuestMessage= ref(null)
// const GuestStatus = ref('Hadir')

// Alert handler
const statusResponse = ref(false)
const showAlert = ref(false)

// Data Dummy
const messages = [
  {
    guestName: "Andi & Rina",
    timestamp: "12 Januari 2024, 10:00 WIB",
    guestMessage: "Selamat menempuh hidup baru, Andi & Rina! Semoga cinta kalian terus tumbuh dan membawa kebahagiaan yang abadi. Selamat atas hari yang penuh berkah ini!",
  },
  {
    guestName: "Dimas & Sinta",
    timestamp: "20 Januari 2024, 14:00 WIB",
    guestMessage: "Selamat berbahagia, Dimas & Sinta! Semoga pernikahan ini menjadi awal dari perjalanan yang indah penuh cinta dan keharmonisan. Doa terbaik untuk kalian!",
  },
  {
    guestName: "Bayu & Intan",
    timestamp: "5 Februari 2024, 09:00 WIB",
    guestMessage: "Bayu & Intan, selamat atas hari bahagia kalian! Semoga pernikahan ini menjadi awal kisah cinta yang penuh makna dan kebahagiaan selamanya.",
  },
  {
    guestName: "Arif & Dewi",
    timestamp: "15 Februari 2024, 15:30 WIB",
    guestMessage: "Arif & Dewi, selamat menempuh hidup baru! Semoga cinta, kebahagiaan, dan kedamaian selalu menyertai rumah tangga kalian. Selamat menikmati hari istimewa ini!",
  },
  {
    guestName: "Yoga & Lina",
    timestamp: "1 Maret 2024, 11:00 WIB",
    guestMessage: "Yoga & Lina, selamat atas pernikahan kalian! Semoga hari ini menjadi awal perjalanan cinta yang luar biasa dan penuh berkah.",
  },
  {
    guestName: "Budi & Maya",
    timestamp: "10 Maret 2024, 17:00 WIB",
    guestMessage: "Budi & Maya, selamat menikah! Semoga cinta kalian semakin kuat setiap harinya dan rumah tangga kalian selalu harmonis. Selamat berbahagia!",
  },
  {
    guestName: "Eka & Rani",
    timestamp: "20 Maret 2024, 13:00 WIB",
    guestMessage: "Eka & Rani, selamat atas hari spesial ini! Semoga kalian selalu bersama dalam suka maupun duka, menjalani kehidupan dengan penuh cinta dan kebahagiaan.",
  },
  {
    guestName: "Fajar & Sari",
    timestamp: "5 April 2024, 08:30 WIB",
    guestMessage: "Selamat menikah, Fajar & Sari! Semoga hari bahagia ini menjadi awal perjalanan cinta yang abadi, penuh kasih, dan berkah sepanjang masa.",
  },
  {
    guestName: "Rian & Tika",
    timestamp: "15 April 2024, 16:00 WIB",
    guestMessage: "Selamat atas pernikahan kalian, Rian & Tika! Semoga cinta dan kebahagiaan selalu menyertai perjalanan rumah tangga kalian. Selamat berbahagia!",
  },
  {
    guestName: "Aldi & Mira",
    timestamp: "25 April 2024, 18:00 WIB",
    guestMessage: "Aldi & Mira, selamat menikah! Semoga kalian selalu diberkahi cinta yang tulus dan kehidupan rumah tangga yang harmonis. Selamat menikmati hari yang indah ini!",
  },
];
//URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzPgWJ7760OwwRlvjhrBMSM9HTVJL2wjDnDB3Up9ZOEIm09LMBwpmSpkQ6eGjAPGPCH/exec"
const sendMessage = ( evt ) => {
  evt.preventDefault()
  
  setTimeout( () => {
    // Post form
    fetch(scriptURL, { method: 'POST', body: new FormData(form.value)})
      .then( res => {
        console.log('Success: ', res)
        statusResponse.value = true
        showAlert.value = true
       })
      .catch( err => {
        console.log('Error: ', err)
        statusResponse.value = false
        showAlert.value = true
      })
  }, 500)
}

// Auto fill guest name with route.query
const route = useRoute()
if ( route.query.to ) GuestName.value = route.query.to

</script>
