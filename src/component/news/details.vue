<template>
    <section>
        <v-stitle :title='title'></v-stitle>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-cloak>
                    <h4 class='destitle'>{{details.title}}</h4>
                    <p>{{details.add_time|time-filter}}</p>
                    <p style="color: #333;" v-html="details.content"></p>
                </div>
            </div>
        </div>
        <v-comment :id='id'></v-comment>
    </section>
</template>
<script>
import config from '../../js/config.js'
import Ntitle from '../public/title.vue'
import Commentm from '../public/comment.vue'

export default {
    data() {
        return {
            details: null,
            id: this.$route.params.id,
            title: '图文详情',
        }
    }, components: {
        'v-stitle': Ntitle,
        'v-comment':Commentm
    },
    methods: {
        getdetails() {
            this.$http.get(config.getdetails + this.$route.params.id).then(res => {
                if (res.body.status == 0) {
                    this.details = res.body.message[0];
                }
            })
        }
    },
    created() {
        this.getdetails()
    }
}
</script>

<style lang='less'>
.destitle {
    color: #999;
}

.mui-card {
    img {
        width: 100%;
    }
}
</style>

