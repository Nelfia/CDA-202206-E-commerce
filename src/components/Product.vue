<template>
    <!-- v-if ici pour attendre la donnée envoyée par le parent (et potentiellement venant d'un serveur) -->
    <div v-if="product" class="product-card">

        
        <h1>{{ product.name }}</h1>
        <my-stars :stars="product.stars"></my-stars>

        <article class="product">
            <div @click="goPreviousPage" class="previous"><img src="https://img.icons8.com/glyph-neue/64/000000/double-left.png"/></div>
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
    computed: { // Récupère le bon produit grâce à l'ID sélectionné
        product: function () {
            return this.products.find(product => product.id == this.id);
        },
        id: function () {
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
    },
    methods: {
        goPreviousPage: function(){
            this.$router.go(-1)
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

.product {
    position: relative;
}

.product img {
    border-radius: 4px;
    width: 30vw;
    max-height: 40vw;
    object-fit: contain;
}

.product .previous img {
    position: absolute;
    top: -4vw;
    left: -4rem;
    backdrop-filter: blur(7px);
    border-radius: 50%;
    box-shadow: 2px 2px 5px grey;
    width: 90px;
    height: 90px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.product .previous img:hover {
    transform: scale3d(1.1,1.1,1.1);
}

</style>