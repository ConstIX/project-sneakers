<script setup>
import { useMediaQuery } from '@vueuse/core'
import { Heart, ShoppingCart } from 'lucide-vue-next'

const isMobile = useMediaQuery('(max-width: 530px)')
</script>

<template>
  <header class="border-b">
    <div class="mx-auto max-w-[1000px] px-3 md1:max-w-[800px] md2:max-w-[600px]">
      <div class="flex h-32 items-center justify-between md4:h-20">
        <a href="/" class="flex items-center gap-4">
          <img src="/logo.png" alt="..." width="40" height="40" />
          <span class="flex flex-col">
            <span class="text-xl font-bold uppercase md4:text-base">Vue Sneakers</span>
            <span v-if="!isMobile" class="text-sm text-gray-400">Магазин лучших кроссовок</span>
          </span>
        </a>

        <div class="flex gap-8 md4:gap-6">
          <a href="" class="flex items-center gap-2 md4:flex-[0_1_18px]">
            <ShoppingCart size="20" color="#9b9b9b" />
            <span v-if="!isMobile" class="text-sm/none text-gray-400">1205 руб.</span>
          </a>

          <a href="" class="flex items-center gap-2">
            <Heart size="20" color="#9b9b9b" />
            <span v-if="!isMobile" class="text-sm/none text-gray-400">Закладки</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
