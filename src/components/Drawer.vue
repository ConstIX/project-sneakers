<script setup>
import { ArrowRight, ChevronLeft } from 'lucide-vue-next'
import DrawerCard from './DrawerCard.vue'
</script>

<template>
  <div class="fixed left-0 top-0 h-full w-full bg-black/65" />

  <div
    class="fixed right-0 top-0 flex h-full w-96 flex-col overflow-auto bg-white p-8 md4:w-full md4:p-5"
  >
    <div class="flex items-center gap-5">
      <button class="mt-1 rounded-lg border p-1">
        <ChevronLeft size="20" color="#E4E4E4" />
      </button>
      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>

    <div class="mt-8 flex-1 space-y-5 md3:space-y-3">
      <DrawerCard />
      <DrawerCard />
      <DrawerCard />
      <DrawerCard />
      <DrawerCard />
    </div>

    <div class="mt-8">
      <div class="mb-3 flex gap-2 md3:mb-1">
        <span class="text-base">Итого:</span>
        <div class="relative bottom-1 flex-1 border-b border-dashed border-gray-300" />
        <b class="text-base">21 498 руб.</b>
      </div>

      <div class="mb-7 flex gap-2 md3:mb-5">
        <span class="text-base">Налог 5%:</span>
        <div class="relative bottom-1 flex-1 border-b border-dashed border-gray-300" />
        <b class="text-base">1074 руб.</b>
      </div>

      <button
        class="flex w-full items-center justify-center gap-4 rounded-2xl bg-lime-500 p-3 transition hover:bg-lime-600 disabled:bg-gray-400"
      >
        <span class="mb-1 text-base font-semibold text-white">Оформить заказ</span>
        <ArrowRight size="20" color="#FFF" />
      </button>
    </div>
  </div>
</template>
