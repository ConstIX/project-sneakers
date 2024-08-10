<script setup>
import { ChevronDown, Search } from 'lucide-vue-next'
import { ref } from 'vue'

const visible = ref(false)
const list = [
  { item: 'Названию', sortProperty: 'title' },
  { item: 'Цене (DESC)', sortProperty: 'price' },
  { item: 'Цене (ASC)', sortProperty: '-price' }
]

defineProps({
  search: String,
  sortItem: String,
  sortProperty: String,
  onChangeSort: Function,
  onChangeInput: Function
})
</script>

<template>
  <div class="w-72 md4:w-full">
    <div class="mt-3 flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <Search size="18" color="#E4E4E4" />
      <input
        @input="(e) => onChangeInput(e.target.value)"
        class="block w-full max-w-48 text-sm outline-none placeholder:text-gray-300"
        type="text"
        placeholder="Поиск..."
      />
    </div>

    <div class="relative mt-3">
      <label
        @click="visible = !visible"
        class="flex cursor-pointer items-center justify-between gap-5 rounded-xl border border-gray-200 px-4 py-3"
      >
        <div>
          <span>Сортировка по: </span>
          <span>{{ sortItem }}</span>
        </div>
        <ChevronDown size="20" />
      </label>

      <ul
        v-if="visible"
        class="absolute z-10 mt-3 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
      >
        <li
          v-for="obj in list"
          @click="
            () => {
              onChangeSort(obj)
              visible = false
            }
          "
          :key="obj.item"
          :class="[
            'cursor-pointer px-4 py-2 transition',
            sortItem === obj.item ? 'bg-gray-200' : 'hover:bg-gray-200'
          ]"
        >
          {{ obj.item }}
        </li>
      </ul>
    </div>
  </div>
</template>
