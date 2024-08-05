<script setup>
import { Heart, ShoppingCart } from 'lucide-vue-next'
</script>

<template>
  <header class="border-b">
    <div class="container">
      <div class="flex h-32 items-center justify-between">
        <a href="/" class="flex items-center gap-4">
          <img src="/logo.png" alt="..." width="40" height="40" />
          <span class="flex flex-col">
            <span class="text-xl font-bold uppercase">Vue Sneakers</span>
            <span class="text-sm text-gray-400">Магазин лучших кроссовок</span>
          </span>
        </a>

        <div class="flex gap-8">
          <a href="" class="flex items-center gap-2">
            <ShoppingCart size="18" color="#9b9b9b" />
            <span class="text-sm leading-none text-gray-400">1205 руб.</span>
          </a>

          <a href="" class="flex items-center gap-2">
            <Heart size="18" color="#9b9b9b" />
            <span class="text-sm leading-none text-gray-400">Закладки</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
