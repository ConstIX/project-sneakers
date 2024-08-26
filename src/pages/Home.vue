<script setup>
import Filter from '@/components/Filter.vue'
import { useSneakersStore } from '@/store/sneakers.store'
import Card from '../components/Card.vue'

const store = useSneakersStore()
</script>

<template>
  <div class="pb-6 pt-20">
    <div class="mx-auto max-w-[1000px] px-3 md1:max-w-[800px] md2:max-w-[600px] md4:max-w-[320px]">
      <div class="flex items-center justify-between gap-5 md4:flex-col">
        <h1 class="text-3xl/none font-bold md3:text-2xl/none">Все кроссовки</h1>

        <Filter />
      </div>

      <div
        class="mt-10 grid grid-cols-4 gap-9 md1:grid-cols-3 md1:gap-7 md2:grid-cols-2 md2:gap-5 md4:grid-cols-1"
      >
        <Card
          v-for="obj in store.sneakers"
          :key="obj.id"
          @addFavouriteSneakers="() => store.addFavouriteSneakers(obj)"
          v-bind="{ ...obj }"
        />
      </div>
    </div>
  </div>
</template>
