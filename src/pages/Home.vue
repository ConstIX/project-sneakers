<script setup>
import Filter from '@/components/Filter.vue'
import { sneakersService } from '@/services/sneakers'
import debounce from 'lodash.debounce'
import { onMounted, reactive, ref, watch } from 'vue'
import Card from '../components/Card.vue'

const sneakers = ref([])
const filter = reactive({
  search: '',
  sortItem: 'Названию',
  sortProperty: 'title'
})

const onChangeSort = (obj) => {
  filter.sortItem = obj.item
  filter.sortProperty = obj.sortProperty
}

const onChangeInput = debounce((event) => (filter.search = event), 300)

const fetchItems = async () => {
  try {
    sneakers.value = await sneakersService.getSneakers(filter.search, filter.sortProperty)
  } catch (error) {
    throw new Error(error)
  }
}

onMounted(fetchItems)
watch(filter, fetchItems)
</script>

<template>
  <div class="pb-6 pt-20">
    <div class="mx-auto max-w-[1000px] px-3 md1:max-w-[800px] md2:max-w-[600px] md4:max-w-[320px]">
      <div class="flex items-center justify-between gap-5 md4:flex-col">
        <h1 class="text-3xl/none font-bold md3:text-2xl/none">Все кроссовки</h1>

        <Filter v-bind="{ ...filter, onChangeSort, onChangeInput }" />
      </div>

      <div
        class="mt-10 grid grid-cols-4 gap-9 md1:grid-cols-3 md1:gap-7 md2:grid-cols-2 md2:gap-5 md4:grid-cols-1"
      >
        <Card v-for="obj in sneakers" :key="obj.id" v-bind="obj" />
      </div>
    </div>
  </div>
</template>
