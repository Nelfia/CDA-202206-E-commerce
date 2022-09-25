<template>
    <div>
        <table>
            <tfoot>
                <tr>
                    <td>Total HT</td>
                    <td>{{ ht }} € HT</td>
                </tr>
                <tr>
                    <td>TVA</td>
                    <td>{{ tva }} €</td>
                </tr>
                <tr>
                    <td>Livraison 
                        <select name="delivery-choice" id="delivery-choice" v-model="delivery">
                            <option disabled>--Choisissez un mode de livraison --</option>
                            <option value=20.00>à domicile (20€)</option>
                            <option value=0.00 selected>en magasin (gratuit) </option>
                        </select>
                    </td>
                    <td>{{ delivery }} €</td>
                </tr>
                <tr>
                    <th>Total TTC</th>
                    <th>{{ ttc }} € TTC</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>


<script>
export default {
    props: {
        "lines": {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            "delivery": 0,
            "ht": 0
        }
    },
    computed: {
        "tva": function () {
            return Math.round((this.ht * 0.2) * 100 )/ 100
        },
        "ttc": function () {
            let totalTtc = this.ht + this.tva + parseFloat(this.delivery)
            totalTtc = Math.round(totalTtc * 100) / 100
            return totalTtc
        }
    },
    watch: {
        lines: {
            handler: function () {
                this.ht = 0
                this.lines.forEach(line => {
                    this.ht += parseFloat(line.total)
                    this.ht = Math.round(this.ht * 100) / 100
                })
            },
            deep: true
        }
    }
}
</script>