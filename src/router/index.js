import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import page1 from '../views/page1.vue'
import demo_Form from '../views/demo_Form.vue'
import slot from '../views/Slot.vue'
import loop from '../views/loop.vue'
// import Notfound from '../views/Notfound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path:'/',
  //   name:'Notfound',
  //   component: Notfound
  // },
  {
    path:'/page1',
    name:'page1',
    component: page1
  },
  {
    path:'/slot',
    name:'slot',
    component: slot
  },
  {
    path:'/loop',
    name:'loop',
    component: loop
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/demo_Form',
    name:'demo_Form',
    component: demo_Form
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
