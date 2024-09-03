<script setup>
import { ChevronLeft } from 'lucide-vue-next'
import Card from '../components/Card.vue'
</script>

<template>
  <div class="pb-6 pt-20">
    <div class="container">
      <div class="flex items-center gap-5">
        <button class="rounded-lg border p-2">
          <ChevronLeft size="18" color="#E4E4E4" />
        </button>
        <h1 class="text-3xl/none font-bold">Мои заказы</h1>
      </div>

      <div
        class="mt-10 flex flex-wrap justify-between gap-9 md1:gap-7 md3:gap-5 md4:mx-auto md4:max-w-80"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>
