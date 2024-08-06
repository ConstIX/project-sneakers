import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Favourite from './pages/Favourite.vue'
import Home from './pages/Home.vue'

import './main.scss'

const app = createApp(App)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/favourite',
    component: Favourite
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.mount('#app')
