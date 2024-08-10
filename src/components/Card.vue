<script setup>
import { Heart, Plus } from 'lucide-vue-next'

defineProps({
  id: Number,
  title: String,
  price: Number,
  imageUrl: String
})
</script>

<template>
  <div
    class="relative flex h-full cursor-pointer flex-col rounded-3xl border border-gray-200 bg-white px-7 pb-7 pt-2 transition hover:-translate-y-3 hover:shadow-xl"
  >
    <button class="absolute top-7 rounded-lg border bg-white p-2">
      <Heart size="16" color="#E4E4E4" />
    </button>
    <img :src="imageUrl" alt="..." class="mx-auto h-[149px] w-[159px]" />
    <p class="mb-4 mt-2 flex-1 text-sm">{{ title }}</p>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs font-medium uppercase text-gray-300">Цена:</p>
        <b class="text-sm">{{ price }} руб.</b>
      </div>
      <button class="rounded-lg border p-2">
        <Plus size="16" color="#E4E4E4" />
      </button>
    </div>
  </div>
</template>
