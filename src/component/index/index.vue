<template>
    <div>
        <v-lunbo :lunbolist='list'></v-lunbo>
        <v-nav></v-nav>
    </div>
</template>

<script>
import congfig from '../../js/config.js'
import cLunBo from '../public/lunbo.vue';
import cNav from './nav.vue';
export default {
    components: {
        'v-nav': cNav,
        'v-lunbo': cLunBo
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        getlunbo() {

            this.$http.get(congfig.getlubo).then((res) => {
                this.list = res.body.message
            })
        }
    },
    created: function () {
        this.getlunbo();
    }
}
</script>

<style>

</style>
