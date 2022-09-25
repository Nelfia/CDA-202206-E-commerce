<template>
    <!-- v-if ici pour attendre la donnée envoyée par le parent (et potentiellement venant d'un serveur) -->
    <div v-if="product">  
        <h1>{{ product.name }}</h1>
        <p> {{ product.description }}</p>
        <div>
            <b>Prix:</b> {{ product.price }} €
        </div>
        <div>
            <my-stars :stars="product.stars"></my-stars>
        </div>
        <div>
            <img :src="product.img" />
        </div>
    </div>
</template>
  


<script>
export default {
    props: {
        id: {
            "type": Number,
            required: true
        },
        products: {
            type: Array,
            required: true
        }
    },
    computed: { // Récupère le bon produit grâce à l'ID sélectionné
        product: function () {
            return this.products.find(product => product.id == this.id);
        }
    }
}
</script>