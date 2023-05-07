import { createRouter, createWebHashHistory } from 'vue-router'
import ARenommerVue from '../components/MesAdresses.vue'
import MesAdresses from "@/components/MesAdresses.vue";

const routes = [
    // À compléter
    {
      path: '/',
      name : 'homepage',
      component : MesAdresses
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router