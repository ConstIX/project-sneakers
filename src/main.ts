import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Favourites from './pages/Favourites.vue'
import Home from './pages/Home.vue'

import './main.scss'

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/favourites', component: Favourites }
  ]
})

createApp(App).use(pinia).use(router).mount('#app')
