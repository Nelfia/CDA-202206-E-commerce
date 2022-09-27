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
                <tr v-for="(line, index) in localLines">
                    <td>{{ line.name }}</td>
                    <td>{{ line.price }} € HT</td>
                    <td>x <input type="number" min=0 v-model=line.quantity></td>
                    <td>{{ getTotal(line) }} € HT</td>
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
    data: function () {
        return {
            localLines: []
        }
    },
    methods: {
        getTotal(line) {
            return line.total = Math.round((line.price * line.quantity) * 100) / 100
        },
        removeLine(index) {
            this.lines.splice(index, 1)
        },
    },
    watch: {
        lines: {
            handler: function (newLines, oldLines) {
                if (JSON.stringify(newLines) !== JSON.stringify(oldLines)) {
                    this.localLines = JSON.parse(JSON.stringify(this.lines))
                }
            },
            deep: true
        },
        localLines: {
            handler: function (newLines) {
                    this.$emit("update-lines", { 'localLines': this.localLines })
                }
            },
            deep: true
        }
}

</script>

<style>
th,
td {
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