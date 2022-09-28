<template>
  <div id="app">
    <!-- <my-products :products="products"></my-products> -->
    <!-- <my-product :id="2" :products="products"></my-product> -->
    <!-- <my-cart></my-cart> -->
    <ul>
      <li><router-link to="/">Produits</router-link></li>
      <li><router-link to="/cart">Panier</router-link></li>
    </ul>
    
    

    <router-view></router-view>
  </div>
</template>



<script>
export default {
  data: function () {
    return {
      products: []
    }
  },
  computed: {
    id: function() {
        return this.$route.params.id
    }
  },
  created: function () {
    fetch("/public/products.json")
      .then(response => response.json())
      .then((data) => {
        this.products = data;
      })
      .catch(error => console.error(error))
  }
}
</script>



<style>
  #app {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #app a {
    text-align: center;
    width: fit-content;
    text-decoration: none;
  }
  .router-link-exact-active{
    border-bottom: 2px solid red;
  }
  ul {
    display: flex;
    list-style-type: none;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
</style>