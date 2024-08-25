import axios from 'axios'

class FavouritesService {
  private BASE_URL = 'https://20cf32060fa290c6.mokky.dev/favourites'

  async getFavouriteSneakers() {
    const { data } = await axios.get<{ id: number; parentId: number }>(`${this.BASE_URL}`)
    return data
  }

  async postFavouriteSneakers(params: { parentId: number }) {
    const { data } = await axios.post<{ parentId: number }>(`${this.BASE_URL}`, params)
    return data
  }

  async deleteFavouriteSneakers(favouriteId: number) {
    const { data } = await axios.delete(`${this.BASE_URL}/${favouriteId}`)
    return data
  }
}

export const favouritesService = new FavouritesService()
