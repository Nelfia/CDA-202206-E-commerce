<template>
    <div>
        <h1> Votre Panier </h1>

        <my-cart-products 
            v-if="lines" :lines="lines"
            @update-lines="manageUpdatedLines"
        ></my-cart-products>

        <my-totaux :lines="lines"></my-totaux>
    </div>
</template>


<script>
export default {
    data: function () {
        return {
            lines: []
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
        manageUpdatedLines: function(payload) {
            console.log(payload)
            this.lines = payload.localLines
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