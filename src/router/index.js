import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import Detail from '../views/DetailProduct.vue'
import Dashboard from '../views/Dashboard.vue'
import Checkout from '../components/CheckoutPage.vue'
import NotFound from '../views/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Product',
    component: Product
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    children: [
      {
        path: 'checkout',
        component: Checkout
      }
    ]
  },
  {
    path: '*',
    name: 'not found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
