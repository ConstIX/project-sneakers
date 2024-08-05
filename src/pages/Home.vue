<script setup>
import Card from '../components/Card.vue'
</script>

<template>
  <div class="pb-6 pt-20">
    <div class="container">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold">Все кроссовки</h1>
        <input class="" type="search" />
      </div>

      <div class="flex flex-wrap gap-9">
        <Card />
      </div>
    </div>
  </div>
</template>
