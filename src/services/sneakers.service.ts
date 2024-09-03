import axios from 'axios'

interface ISneakers {
  id: number
  title: string
  price: number
  imageUrl: string
  isFavourite: boolean
  isAdded: boolean
}

class SneakersService {
  private BASE_URL = 'https://20cf32060fa290c6.mokky.dev/items'

  async getSneakers(search: string, sortProperty: string) {
    const sortBy = `?sortBy=${sortProperty}`
    const title = search ? `&title=*${search}*` : ''

    const { data } = await axios.get<ISneakers[]>(`${this.BASE_URL}${sortBy}${title}`)
    return data
  }

  async updateSneakers({ id, stateKey, value }: { id: number; stateKey: string; value: boolean }) {
    const { data } = await axios.patch<ISneakers[]>(`${this.BASE_URL}/${id}`, {
      [stateKey]: value
    })
    return data
  }
}

export const sneakersService = new SneakersService()
