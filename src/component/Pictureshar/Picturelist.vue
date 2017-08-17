<template>
    <section class='plist'>
        <v-phead></v-phead>
        <div class='c'></div>
        <div class="mui-card" v-for='(v,i) in comlist' :key='i'>
            <a :href="'#/picture/picdetails/'+v.id">
                <img :src="'http://ofv795nmp.bkt.clouddn.com/'+v.img_url"  v-lazy="'http://ofv795nmp.bkt.clouddn.com/'+v.img_url">
            </a>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h5 style="color: #fff;">{{v.title}}</h5>
                    <p style="color: #fff;" v-html="v.content"></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import phead from './pheader.vue'
import config from '../../js/config.js'
export default {
    data() {
        return {
            comlist: [],
            picid: ''
        }
    },
    methods: {
        getplist() {
            let id = this.$route.params.id ? this.$route.params.id : '0'
            this.$http.get(config.getimagelist + id).then(res => {
                if (res.body.status == 0) {
                    this.comlist = res.body.message
                }
            })
        },
    },
    components: {
        'v-phead': phead
    },
    created() {
        this.getplist()
    },
    watch: {
        "$route": 'getplist'
    },
}
</script>

<style lang='less'>
.mui-card {
    margin: 0;
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
}

.mui-card-content-inner {

    padding: 15px 5px;
}

.mui-card-content {
    position: absolute; // height: 60px;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .3); //transparent
    p {
        width: 100%;
        max-height: 60px;
        overflow: hidden;
        margin-bottom: 0;
    }
}

.plist {
    img {
        width: 100%;
        height: 250px;
    }
    
}
[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>


