<script setup>
import { Search } from 'lucide-vue-next'
import Card from '../components/Card.vue'
</script>

<template>
  <div class="pb-6 pt-20">
    <div class="container">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl/none font-bold">Все кроссовки</h1>
        <div
          class="mt-3 flex w-full max-w-64 items-center gap-3 rounded-xl border border-gray-200 px-4 py-3"
        >
          <Search size="18" color="#E4E4E4" />
          <input
            class="block w-full max-w-48 text-sm outline-none placeholder:text-gray-300"
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div class="mt-10 flex gap-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>
