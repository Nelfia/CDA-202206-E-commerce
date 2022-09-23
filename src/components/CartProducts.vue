<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>Prix unitaire</th>
                    <th>Quantité</th>
                    <th>Total</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(line, index) in lines">
                    <td>{{ line.name }}</td>
                    <td>{{ line.price }} € HT</td>
                    <td>x <input type="number" min="0" v-model="lines[index].quantity"></td>
                    <td>{{ getTotal(index) }} € HT</td>
                    <td><button @click="removeLine(index)">X</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        lines: {
            type: Array,
            required: true
        }
    },
    methods: {
        getTotal: function (index) {
            return this.lines[index].total = (this.lines[index].price * this.lines[index].quantity).toFixed(2)
        },
        removeLine: function (index) {
            this.lines.splice(index, 1)
        }
    }
}
</script>

<style>
    th, td {
        text-align: start;
        padding: 0 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    th {
        background-color: #ccc;
    }
    input {
        width: 3vw;
    }
</style>