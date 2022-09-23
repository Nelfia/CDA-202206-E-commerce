<template>
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
            <img :src="product.photo" />
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        id: {
            "type": Number,
            required: true
        }
    },
    data: function () {
        return {
            products: []
        }
    },
    created: function () {
        fetch("/public/products.json")
            .then(response => response.json())
            .then((data) => {
                this.products = data
            })
            .catch(error => console.error(error))
    },
    computed: {
        product: function () {
            return this.products.find(product => product.id == this.id);
        }
    }
}
</script>