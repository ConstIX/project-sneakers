<script setup>
import { useSneakersStore } from '@/store/sneakers.store'
import { ArrowRight, ChevronLeft } from 'lucide-vue-next'
import { computed } from 'vue'
import DrawerCard from './DrawerCard.vue'

const store = useSneakersStore()
const orderdSneakers = computed(() => store.sneakers.filter((i) => i.isAdded === true))

const emit = defineEmits(['handleOpenDrawer'])

defineProps({
  drawerVisible: Boolean
})
</script>

<template>
  <div
    :class="[
      'fixed top-0 z-10 h-full w-full bg-black/65 transition-all',
      drawerVisible ? 'left-0' : '-left-[110%]'
    ]"
  />

  <div
    :class="[
      'fixed top-0 z-10 flex h-full w-96 flex-col overflow-auto bg-white p-8 transition-all md4:w-full md4:p-5',
      drawerVisible ? 'right-0' : '-right-[110%]'
    ]"
  >
    <div class="flex items-center gap-5">
      <button @click="emit('handleOpenDrawer')" class="mt-1 rounded-lg border p-1">
        <ChevronLeft size="20" color="#E4E4E4" />
      </button>
      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>

    <div v-if="orderdSneakers.length" class="flex h-full flex-col">
      <div class="my-8 space-y-2">
        <DrawerCard v-for="obj in orderdSneakers" :key="obj.id" v-bind="{ ...obj }" />
      </div>

      <div class="mt-auto">
        <div class="mb-3 flex gap-2 md3:mb-1">
          <span class="text-base">Итого:</span>
          <div class="relative bottom-1 flex-1 border-b border-dashed border-gray-300" />
          <b class="text-base">{{ store.totalPrice }} ₽</b>
        </div>

        <div class="mb-7 flex gap-2 md3:mb-5">
          <span class="text-base">Налог 5%:</span>
          <div class="relative bottom-1 flex-1 border-b border-dashed border-gray-300" />
          <b class="text-base">{{ (store.totalPrice * 0.05).toFixed(2) }} ₽</b>
        </div>

        <button
          class="flex w-full items-center justify-center gap-4 rounded-2xl bg-lime-500 p-3 transition hover:bg-lime-600 disabled:bg-gray-400"
        >
          <span class="mb-1 text-base font-semibold text-white">Оформить заказ</span>
          <ArrowRight size="20" color="#FFF" />
        </button>
      </div>
    </div>

    <div v-else class="flex h-full flex-col items-center justify-center">
      <img src="/empty.png" alt="..." />
      <div class="mx-auto max-w-[320px] text-center">
        <h3 class="mb-1 text-2xl font-bold">Корзина пустая</h3>
        <p class="text-gray-400">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      </div>
    </div>
  </div>
</template>
