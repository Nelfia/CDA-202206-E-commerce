<template>
    <!-- v-if ici pour attendre la donnée envoyée par le parent (et potentiellement venant d'un serveur) -->
    <div v-if="product" class="product-card">
        <h1>{{ product.name }}</h1>
        <my-stars :stars="product.stars"></my-stars>

        <article class="produit">
            <img :src="product.img" />
            <p> {{ product.description }}</p>
            <b>Prix: </b>{{ product.price }} €/unité
        </article>

    </div>
</template>
  


<script>
export default {
    data: function () {
        return {
            products: [],
        }
    },
    created: function () {
        fetch("/public/products.json")
            .then(response => response.json())
            .then((data) => {
                this.products = data;
            })
            .catch(error => console.error(error))
    },
    computed: { // Récupère le bon produit grâce à l'ID sélectionné
        product: function () {
            return this.products.find(product => product.id == this.id);
        },
        id: function () {
            return this.$route.params.id
        }
    }
}
</script>


<style>
.product-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.product-card h1 {
    margin-bottom: 0;
    margin-top: 2rem;
}

.product-card img {
    border-radius: 8px;
    box-shadow: 0px 0px 5px lightgrey;
}
</style>