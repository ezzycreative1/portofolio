<!-- components/Header.vue -->
<template>
    <header class="bg-gray-800 text-white py-20 relative">
      <div class="container mx-auto flex justify-between items-center relative">
        <!-- Bagian Konten Kiri -->
        <div class="flex-shrink-0 w-1/2 pr-8">
          <h1 class="text-4xl font-extrabold mb-4 leading-tight">Hi, I'm Adi Setyadharma</h1>
          <p class="text-lg">I am an experienced Backend Developer with a passion for cutting-edge technologies.</p>
          <!-- Tombol "Hire Me" dan "Let's Talk" -->
          <div class="mt-6">
            <a href="#contact" class="bg-blue-500 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-blue-600">Hire Me</a>
            <a href="#contact" class="ml-4 border border-blue-500 text-blue-500 px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-blue-100">Let's Talk</a>
          </div>
        </div>
        <!-- Bagian Foto Kanan -->
        <div class="lg:flex-shrink-0 lg:w-1/2 relative">
          <!-- Efek Shading pada Foto -->
          <div class="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent rounded-full"></div>
          <img src="https://via.placeholder.com/400" alt="Your Photo" class="rounded-full shadow-xl relative z-10">
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    // Logika komponen header
  }
  </script>
  
  <style scoped>
  /* Gaya khusus untuk komponen header */
  /* Anda dapat menambahkan gaya tambahan di sini */
  </style>
  