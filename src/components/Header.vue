<script setup>
import { useSneakersStore } from '@/store/sneakers.store'
import { useMediaQuery } from '@vueuse/core'
import { Heart, ShoppingCart } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const isMobile = useMediaQuery('(max-width: 530px)')
const store = useSneakersStore()
const emit = defineEmits(['handleOpenDrawer'])
</script>

<template>
  <header class="border-b">
    <div class="mx-auto max-w-[1000px] px-3 md1:max-w-[800px] md2:max-w-[600px]">
      <div class="flex h-32 items-center justify-between md4:h-20">
        <RouterLink to="/" class="flex items-center gap-4">
          <img src="/logo.png" alt="..." width="40" height="40" />
          <span class="flex flex-col">
            <span class="text-xl font-bold uppercase md4:text-base">Vue Sneakers</span>
            <span v-if="!isMobile" class="text-sm text-gray-400">Магазин лучших кроссовок</span>
          </span>
        </RouterLink>

        <div class="flex gap-8 md4:gap-6">
          <button
            @click="emit('handleOpenDrawer')"
            class="flex items-center gap-2 md4:flex-[0_1_18px]"
          >
            <ShoppingCart size="20" color="#9b9b9b" />
            <span v-if="!isMobile" class="text-sm/none text-gray-400"
              >{{ store.totalPrice }} ₽</span
            >
          </button>

          <RouterLink to="/favourites" class="flex items-center gap-2">
            <Heart size="20" color="#9b9b9b" />
            <span v-if="!isMobile" class="text-sm/none text-gray-400">Закладки</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
