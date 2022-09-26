<template>
    <div>
        <h1> Votre Panier </h1>

        <my-cart-products 
            v-if="lines" :lines="lines"
            @update-lines="updateLines"
        ></my-cart-products>

        <my-totaux :lines="lines"></my-totaux>
    </div>
</template>


<script>
export default {
    data: function () {
        return {
            lines: [],
            updatedLines: []
        }
    },
    created: function () {
        fetch("/public/cart.json")
            .then(response => response.json())
            .then((data) => {
                this.lines = data
            })
            .catch(error => console.error(error))
    },
    methods: {
        updateLines: function (payload) {
            console.log(payload)
            this.updatedLines = payload.localLines
        }
    }
}
</script>

<style>
    *{
        font-family: Poppins, sans-serif;
    }

    div {
        width: fit-content;
        margin: 0 auto;
    }

    div h1 {
        text-align: center;
    }
</style>