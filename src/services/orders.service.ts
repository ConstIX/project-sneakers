import axios from 'axios'

class OrdersService {
  private BASE_URL = 'https://20cf32060fa290c6.mokky.dev/orders'

  async getOrderedSneakers() {
    const { data } = await axios.get(`${this.BASE_URL}`)
    return data
  }
}

export const ordersService = new OrdersService()
