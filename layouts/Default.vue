<!-- layouts/Default.vue -->
<template>
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <nuxt />
    </div>
</template>
  
<script>
   // import '~/assets/js/scripts.js'
    import Navbar from '~/components/Navbar.vue';
    import Header from '~/components/Header.vue';
    import About from '~/components/About.vue';

    export default {
        components: {
            Navbar,
            Header,
            About,
        },  
    }
</script>
  
<style scoped>
/* Gaya umum untuk layout default */
</style>
  