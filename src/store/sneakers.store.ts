import { favouritesService } from '@/services/favourites.service'
import { sneakersService } from '@/services/sneakers.service'
import debounce from 'lodash.debounce'
import { defineStore } from 'pinia'
import { onMounted, reactive, ref, watch } from 'vue'

interface ISneakers {
  id: number
  title: string
  price: number
  imageUrl: string
  isFavourite?: boolean
  isAdded?: boolean
}

export const useSneakersStore = defineStore('sneakers', () => {
  const sneakers = ref<ISneakers[]>([])
  const filter = reactive({
    search: '',
    sortItem: 'Названию',
    sortProperty: 'title'
  })

  const onChangeSort = (obj: Record<string, string>) => {
    filter.sortItem = obj.item
    filter.sortProperty = obj.sortProperty
  }
  const onChangeInput = debounce((event: string) => (filter.search = event), 300)

  const fetchSneakers = async () => {
    try {
      sneakers.value = (await sneakersService.getSneakers(filter.search, filter.sortProperty)).map(
        (obj) => ({
          ...obj,
          isFavourite: false,
          isAdded: false
        })
      )
    } catch (error) {
      console.error(error)
    }
  }

  const fetchFavouriteSneakers = async () => {
    try {
      const favourites = await favouritesService.getFavouriteSneakers()

      sneakers.value = sneakers.value.map((obj) => {
        const favourite = favourites.find((i: any) => i.parentId === obj.id)

        if (!favourite) return obj
        return { ...obj, isFavourite: true, favouriteId: favourite.id }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const addFavouriteSneakers = async (obj: any) => {
    try {
      if (!obj.isFavourite) {
        obj.isFavourite = true
        const favourites = await favouritesService.postFavouriteSneakers({ parentId: obj.id })
        obj.favouriteId = favourites.id
      } else {
        obj.isFavourite = false
        await favouritesService.deleteFavouriteSneakers(obj.favouriteId)
      }
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(() => {
    fetchSneakers()
    fetchFavouriteSneakers()
  })
  watch(filter, fetchSneakers)

  return {
    sneakers,
    filter,
    onChangeSort,
    onChangeInput,
    fetchSneakers,
    fetchFavouriteSneakers,
    addFavouriteSneakers
  }
})
