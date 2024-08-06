<script setup>
import { Heart, Plus } from 'lucide-vue-next'

defineProps({})
</script>

<template>
  <div
    class="rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-3 hover:shadow-xl"
  >
    <button class="rounded-lg border p-2">
      <Heart size="16" color="#E4E4E4" />
    </button>
    <img src="" alt="..." />
    <p class="my-4 text-sm">Мужские Кроссовки Nike Blazer Mid Suede</p>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs font-medium uppercase text-gray-300">Цена:</p>
        <p class="text-sm font-bold">12 999 руб.</p>
      </div>
      <button class="rounded-lg border p-2">
        <Plus size="16" color="#E4E4E4" />
      </button>
    </div>
  </div>
</template>
