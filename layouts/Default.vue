<!-- layouts/Default.vue -->
<template>
    <div>
        <Navbar />
        <Header />
        <nuxt />
    </div>
</template>
  
<script>
    import Navbar from '~/components/Navbar.vue';
    import Header from '~/components/Header.vue';
   

    export default {
        components: {
            Navbar,
            Header,
        },  
    }
</script>
  
<style scoped>
/* Gaya umum untuk layout default */
</style>
  