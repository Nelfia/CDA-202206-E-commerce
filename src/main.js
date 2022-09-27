import Vue from 'vue'
import App from './App.vue'

// Pour utiliser un Single File Component : on l'importe puis on le déclare.
// La doc nous montre d'autres façons de le faire, mais on peut déjà utiliser celle-ci
import Products from './components/Products.vue' // 1 - Import
Vue.component('my-products', Products); // 2 - Déclaration

import Stars from './components/Stars.vue'
Vue.component('my-stars', Stars)

import Product from './components/Product.vue'
Vue.component('my-product', Product)

import Cart from './components/Cart.vue'
Vue.component('my-cart', Cart)

import CartProducts from './components/CartProducts.vue'
Vue.component('my-cart-products', CartProducts)

import Totaux from './components/Totaux.vue'
Vue.component('my-totaux', Totaux)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      { path: '/', component: Products },
      { path: '/product/:id', component: Product },
      { path: '/cart', component: Cart }
  ]
})

// Touchez pas à ça pour l'instant on s'en fiche, ca marche on y touche pas :)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
