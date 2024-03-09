<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <main class="overflow-hidden bg-[#0d253f] z-0 relative">
    <RouterView />
  </main>
</template>
