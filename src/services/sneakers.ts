import axios from 'axios'

class SneakersService {
  private BASE_URL = 'https://20cf32060fa290c6.mokky.dev/items'

  async getSneakers() {
    const { data } = await axios.get(`${this.BASE_URL}`)
    return data
  }
}

export const sneakersService = new SneakersService()
