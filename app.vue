<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>
      <!-- Konten dari halaman-halaman Nuxt.js akan dimuat di sini -->
      <nuxt />
    </NuxtLayout>
  </div>
</template>

<script>
import NuxtLayout from '~/layouts/Default.vue';

export default {
  components: {
    NuxtLayout,
  },
}
</script>

<style>
/* Gaya khusus untuk app.vue, jika diperlukan */
</style>
