import { sneakersService } from '@/services/sneakers.service'
import debounce from 'lodash.debounce'
import { defineStore } from 'pinia'
import { computed, onMounted, reactive, ref, watch } from 'vue'

interface ISneakers {
  id: number
  title: string
  price: number
  imageUrl: string
  isFavourite: boolean
  isAdded: boolean
}

export const useSneakersStore = defineStore('sneakers', () => {
  const sneakers = ref<ISneakers[]>([])
  const filter = reactive({
    search: '',
    sortItem: 'Названию',
    sortProperty: 'title'
  })

  const totalPrice = computed(() => {
    const orderedSneakers = sneakers.value
      .filter((i) => i.isAdded === true)
      .map((i) => i.price)
      .reduce((pv, i) => pv + i, 0)
    return orderedSneakers || 0
  })

  const onChangeSort = (obj: Record<string, string>) => {
    filter.sortItem = obj.item
    filter.sortProperty = obj.sortProperty
  }
  const onChangeInput = debounce((event: string) => (filter.search = event), 300)

  const fetchSneakers = async () => {
    try {
      sneakers.value = await sneakersService.getSneakers(filter.search, filter.sortProperty)
    } catch (error) {
      console.error(error)
    }
  }

  const updateSneakers = async (id: number, stateKey: 'isFavourite' | 'isAdded') => {
    try {
      const idx = sneakers.value.findIndex((i) => i.id === id)
      if (idx !== -1) sneakers.value[idx][stateKey] = !sneakers.value[idx][stateKey]

      await sneakersService.updateSneakers({ id, stateKey, value: sneakers.value[idx][stateKey] })
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(fetchSneakers)
  watch(filter, fetchSneakers)

  return {
    sneakers,
    filter,
    totalPrice,
    onChangeSort,
    onChangeInput,
    fetchSneakers,
    updateSneakers
  }
})
