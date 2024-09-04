<script setup>
import { useSneakersStore } from '@/store/sneakers.store'
import { X } from 'lucide-vue-next'

const store = useSneakersStore()

defineProps({
  id: Number,
  price: Number,
  title: String,
  imageUrl: String,
  isAdded: Boolean
})
</script>

<template>
  <div
    class="flex items-center justify-between gap-3 rounded-3xl border border-gray-200 bg-white p-5"
  >
    <div class="flex items-center justify-between gap-3">
      <img :src="imageUrl" alt="..." class="max-w-20" />
      <div>
        <p class="mb-2 text-sm">{{ title }}</p>
        <b class="text-sm">{{ price }} ₽</b>
      </div>
    </div>
    <button @click="() => store.updateSneakers(id, 'isAdded')" class="rounded-md border p-1">
      <X size="16" color="#DBDBDB" />
    </button>
  </div>
</template>
