<template>
    <section>
        <v-title :title='title'></v-title>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h4 class='destitle'>{{details.title}}</h4>
                    <p>{{details.add_time|time-filter}}</p>
                    <p style="color: #333;" v-html="details.content"></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import config from '../../js/config.js'
import Ntitle from './title.vue'
export default {
    data() {
        return {
            title: '图文详情',
            details: ''
        }
    }, components: {
        'v-title': Ntitle
    },
    methods: {
        getdetails() {

            this.$http.get(config.getdetails + this.$route.params.id).then(res => {
                this.details = res.body.message[0];
                console.log(res.body);

            })
        }
    }
    , created() {
        this.getdetails()
    }
}
</script>

<style>
    .destitle{
        color: #999;
    }
</style>

