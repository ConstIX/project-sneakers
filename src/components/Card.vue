<script setup>
import { Heart, Plus } from 'lucide-vue-next'
</script>

<template>
  <div
    class="flex-[0_1_22.1%] rounded-3xl border border-gray-200 p-7 transition hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-200"
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
