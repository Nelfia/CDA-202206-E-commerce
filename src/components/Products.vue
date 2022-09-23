<template>
  <!-- <template></template est obligatoire et délimite la partie html -->
  <div>
    <!-- Vos components doivent toujours avoir un seul bloc parent: div, article, select..qu'importe -->
    <h1>Page produits</h1>
    <div v-for="product in products">
      <h2>
        {{ product.name }} 
        <rate-item :rate="product.rate"></rate-item>
      </h2>
      <img :src="product.img" alt="image du produit">
      <p> {{ product.description}} </p>
      <div id="price"> {{ product.price }} € </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "product": Object,
    required: true
  },
  data: function () {
    return {
      'products': []
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
