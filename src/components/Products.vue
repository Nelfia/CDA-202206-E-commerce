<template>
  <!-- <template> est obligatoire et délimite la partie html -->
  <div v-if="products">
    <!-- Vos components doivent toujours être dans un seul bloc parent: div, article, select..qu'importe -->

    <h1>Page produits</h1>

    <div id="products-container">

      <div v-for="product in products" class="produit">
        <h2> {{ product.name }} </h2>
          <my-stars :stars="product.stars"></my-stars>

        <img :src="product.img" alt="image du produit">
        <div id="price"> {{ product.price }} € </div>
      </div>
    </div>

  </div>
</template>



<script>
export default {
  props: {
    "products": {
      type: Array,
      required: true
    }
  }
}
</script>


<style>
#products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.produit {
  width: 30vw;
  height: 40vh;
  box-shadow: 0px 0px 5px lightgrey;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.produit img {
  width: 15vw;
  height: 15vw;
  object-fit: contain;
}

#price {
  font-weight: 600;
  font-size: 1.2rem;
  background-color: gold;
  border-radius: 5px;
  padding: 1rem;
}
</style>