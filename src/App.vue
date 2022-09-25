<template>
  <div id="app">
    <!-- <my-products :products="products"></my-products> -->
    <!-- <my-product :id="2" :products="products"></my-product> -->
    <my-cart></my-cart>
  </div>
</template>



<script>
export default {
  data: function () {
    return {
      products: []
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
