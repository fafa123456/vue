<template>
    <section class="picdetail">
        <v-title :title='title' @getcate='gettit'></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{details.title}}</div>
            <div class="mui-card-content-inner">
                <p v-if="details.add_time">{{details.add_time|time-filter}}</p>
                <!--:src="'http://ofv795nmp.bkt.clouddn.com/'+v.src"-->
                <img class="preview-img" v-for="(v,i) in detailsimg" :key='i' :src='v.src' @click="$preview.open(i, detailsimg)" />
                <p style="color: #333;" v-html='details.content'></p>
            </div>
        </div>
    </section>
</template>

<script>
import Ntitle from '../public/title.vue';
import config from '../../js/config.js';
export default {
    data() {
        return {
            title: '图片详情',
            details: [],
            detailsimg: '',
            clicktitle: ''
        }
    },
    components: {
        'v-title': Ntitle,
    }, methods: {
        getpicdetails() {
            this.$http.get(config.getimgdetail + this.$route.params.id).then(res => {
                if (res.body.status == 0) {
                    this.details = res.body.message[0];
                }
            })
        },
        getimge() {
            this.$http.get(config.getdetailimg + this.$route.params.id).then(res => {
                if (res.body.status == 0) {
                    this.detailsimg = res.body.message.map(function (v) {
                        return {
                            src: "http://ofv795nmp.bkt.clouddn.com/" + v.src, w: 600, h: 400
                        }
                    });
                }
            })
        }, gettit(name) {
            this.clicktitle = name
        }
    },
    created() {
        this.getpicdetails();
        this.getimge()
    }
}
</script>

<style  lang='less'>
.picdetail {

    img {
        width: 33%;
        padding-left: .2em;
        padding-bottom: .5em;
    }
}
</style>

