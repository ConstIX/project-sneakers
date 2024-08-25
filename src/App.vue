<script setup lang="ts">
import { ref, watch } from 'vue'
import Drawer from './components/drawer/Drawer.vue'
import Header from './components/Header.vue'
import Home from './pages/Home.vue'

const drawerVisible = ref(false)
const handleOpenDrawer = () => {
  drawerVisible.value = !drawerVisible.value
}

watch(drawerVisible, (newVal) => {
  if (newVal) document.body.classList.add('lock')
  else document.body.classList.remove('lock')
})
</script>

<template>
  <Drawer v-bind="{ drawerVisible, handleOpenDrawer }" />

  <div class="mx-auto mt-20 w-4/5 rounded-t-2xl bg-white shadow-xl md3:w-full md4:mt-0">
    <Header :handleOpenDrawer="handleOpenDrawer" />
    <Home />
  </div>
</template>
