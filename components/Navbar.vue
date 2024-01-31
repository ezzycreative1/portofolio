<!-- components/Navbar.vue -->
<template>
    <nav id="navbar" class="bg-blue-500 p-4 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <nuxt-link to="/" class="text-white font-bold text-2xl">
          ezzycreative
        </nuxt-link>
        <ul class="flex space-x-6">
          <li><nuxt-link to="#about" class="text-white hover:text-gray-300">About Me</nuxt-link></li>
          <li><nuxt-link to="#journey" class="text-white hover:text-gray-300">My Journey</nuxt-link></li>
          <li><nuxt-link to="#skills" class="text-white hover:text-gray-300">My Skills</nuxt-link></li>
          <li><nuxt-link to="#projects" class="text-white hover:text-gray-300">My Projects</nuxt-link></li>
          <li><nuxt-link to="#blog" class="text-white hover:text-gray-300">Blog</nuxt-link></li>
          <li><nuxt-link to="#contact" class="text-white hover:text-gray-300">Contact</nuxt-link></li>
        </ul>
        <!-- Toggle Icon Navbar -->
        <button id="toggleIcon" class="lg:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    // Logika komponen navbar
  }
  </script>
  
  <style scoped>
  /* Gaya khusus untuk komponen navbar */
  /* Anda dapat menambahkan gaya tambahan di sini */
  </style>
  