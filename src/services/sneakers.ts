import axios from 'axios'

interface Sneakers {
  id: number
  title: string
  price: number
  imageUrl: string
}

class SneakersService {
  private BASE_URL = 'https://20cf32060fa290c6.mokky.dev/items'

  async getSneakers(search: string, sortProperty: string) {
    const sortBy = `?sortBy=${sortProperty}`
    const title = search ? `&title=*${search}*` : ''

    const { data } = await axios.get<Sneakers[]>(`${this.BASE_URL}${sortBy}${title}`)
    return data
  }
}

export const sneakersService = new SneakersService()
