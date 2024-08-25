import axios from 'axios'

interface Sneakers {
  id: number
  title: string
  price: number
  imageUrl: string
}

class SneakersService {
  private BASE_URL = 'https://20cf32060fa290c6.mokky.dev'

  async getSneakers(search: string, sortProperty: string) {
    const sortBy = `?sortBy=${sortProperty}`
    const title = search ? `&title=*${search}*` : ''

    const { data } = await axios.get<Sneakers[]>(`${this.BASE_URL}/items${sortBy}${title}`)
    return data
  }

  async getFavouriteSneakers() {
    const { data } = await axios.get<{ id: number; parentId: number }>(
      `${this.BASE_URL}/favourites`
    )
    return data
  }

  async postFavouriteSneakers(params: { parentId: number }) {
    const { data } = await axios.post<{ parentId: number }>(`${this.BASE_URL}/favourites`, params)
    return data
  }

  async deleteFavouriteSneakers(favouriteId: number) {
    const { data } = await axios.delete(`${this.BASE_URL}/favourites/${favouriteId}`)
    return data
  }
}

export const sneakersService = new SneakersService()
