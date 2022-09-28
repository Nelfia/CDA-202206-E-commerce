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
    beforeRouteEnter: function (to, from, next) {
        fetch("/public/cart.json")
            .then(response => response.json())
            .then((data) => {
                if(data.length > 0) {
                    next(vm => vm.lines = data)
                } else {
                    next(false)
                }
            })
            .catch(error => next(error))
    },
    methods: {
        manageUpdatedLines: function(payload) {
            console.log(payload)
            this.lines = payload.localLines
        }
    },
    watch: {
        lines: {
            handler: function(){
                if(this.lines.length === 0) {
                    this.$router.push({name: 'products'})
                }
            },
            deep: true
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