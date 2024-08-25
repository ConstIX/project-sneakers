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
    const { data } = await axios.get<Sneakers[]>(`${this.BASE_URL}/favourites`)
    return data
  }
}

export const sneakersService = new SneakersService()
