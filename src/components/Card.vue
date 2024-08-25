<script setup>
import { CheckCheck, Heart, Plus } from 'lucide-vue-next'

defineProps({
  id: Number,
  price: Number,
  title: String,
  imageUrl: String,
  isFavourite: Boolean,
  isAdded: Boolean
})

const emit = defineEmits(['addFavouriteSneakers'])
</script>

<template>
  <div
    class="relative flex h-full cursor-pointer flex-col rounded-3xl border border-gray-200 bg-white px-7 pb-7 pt-2 transition hover:-translate-y-3 hover:shadow-xl"
  >
    <button
      @click="() => emit('addFavouriteSneakers')"
      :class="[
        'group absolute top-7 flex h-8 w-8 items-center justify-center rounded-lg border',
        isFavourite ? 'border-red-100 bg-red-100' : ''
      ]"
    >
      <Heart size="16" color="#E4E4E4" :class="isFavourite ? 'fill-red-400 stroke-red-400' : ''" />
    </button>
    <img :src="imageUrl" alt="..." class="mx-auto h-[149px] w-[159px]" />
    <p class="mb-4 mt-2 flex-1 text-sm">{{ title }}</p>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs font-medium uppercase text-gray-300">Цена:</p>
        <b class="text-sm">{{ price }} руб.</b>
      </div>
      <button
        :class="[
          'flex h-8 w-8 items-center justify-center rounded-lg border',
          isAdded ? 'border-green-100 bg-green-100' : ''
        ]"
      >
        <CheckCheck v-if="isAdded" size="16" color="#4ade80" />
        <Plus v-else size="16" color="#E4E4E4" />
      </button>
    </div>
  </div>
</template>
