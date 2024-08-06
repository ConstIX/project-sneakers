<script setup lang="ts">
import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'
import Home from './pages/Home.vue'
</script>

<template>
  <Drawer />

  <div class="mx-auto mt-20 w-4/5 rounded-t-2xl bg-white shadow-xl md3:w-full md4:mt-0">
    <Header />
    <Home />
  </div>
</template>
