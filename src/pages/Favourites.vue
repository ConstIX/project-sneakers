<script setup>
import Card from '@/components/Card.vue'
import Filter from '@/components/Filter.vue'
import { useSneakersStore } from '@/store/sneakers.store'
import { ArrowLeft, ChevronLeft } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const store = useSneakersStore()
const favouriteSneakers = computed(() => store.sneakers.filter((i) => i.isFavourite === true))
</script>

<template>
  <div class="pb-6 pt-20">
    <div
      v-if="favouriteSneakers.length"
      class="mx-auto max-w-[1000px] px-3 md1:max-w-[800px] md2:max-w-[600px] md4:max-w-[320px]"
    >
      <div class="flex items-center justify-between gap-5 md4:flex-col">
        <div class="flex items-center gap-5">
          <RouterLink to="/" class="rounded-lg border p-2">
            <ChevronLeft size="18" color="#E4E4E4" />
          </RouterLink>
          <h1 class="text-3xl/none font-bold">Мои закладки</h1>
        </div>

        <Filter />
      </div>

      <div
        class="mt-10 grid grid-cols-4 gap-9 md1:grid-cols-3 md1:gap-7 md2:grid-cols-2 md2:gap-5 md4:grid-cols-1"
      >
        <Card v-for="obj in favouriteSneakers" :key="obj.id" v-bind="{ ...obj }" />
      </div>
    </div>

    <div v-else class="flex flex-col items-center">
      <img src="/favourites.png" alt="..." class="w-16" />
      <div class="my-5 text-center">
        <h3 class="mb-1 text-2xl font-bold">Закладок нет :(</h3>
        <p class="text-gray-400">Вы ничего не добавляли в закладки</p>
      </div>
      <RouterLink
        to="/"
        class="flex items-center justify-center gap-4 rounded-2xl bg-lime-500 px-5 py-3 transition hover:bg-lime-600 disabled:bg-gray-400"
      >
        <ArrowLeft size="20" color="#FFF" />
        <span class="mb-1 text-base font-semibold text-white">Вернуться назад</span>
      </RouterLink>
    </div>
  </div>
</template>
