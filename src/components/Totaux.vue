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
                    <td>Livraison : 
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
            return this.getMonneyNumber(this.ht * 0.2)
        },
        "ttc": function () {
            let totalTtc = this.ht + this.tva + parseFloat(this.delivery)
            totalTtc = this.getMonneyNumber(totalTtc)
            return totalTtc
        }
    },
    methods : {
        getMonneyNumber: function (number) {
            return Math.round(number*100) / 100
        }
    },
    watch: {
        lines: {
            handler: function () {
                this.ht = 0
                this.lines.forEach(line => {
                    this.ht += parseFloat(line.total)
                    this.ht = this.getMonneyNumber(this.ht)
                })
            },
            deep: true
        }
    }
}
</script>