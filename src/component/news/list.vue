<template>
    <section class="nlist">
        <v-title v-bind:title='title'></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for='(v,i) in newslist' :key='i'>
                <a href="javascript:;" :href="'#/news/details/'+v.id">
                    <img class="mui-media-object mui-pull-left" :src="v.img_url">
                    <div class="">
                        <p class="mui-ellipsis">{{v.title}}</p>
                        <span class='cc'>发表时间:{{v.add_time|time-filter}}</span>
                        <p class='rfloat'>
                            <span class="mui-icon-extra mui-icon-extra-like"></span>{{v.click}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
import Ntitle from '../public/title.vue'
import config from '../../js/config.js';
export default {
    data() {
        return {
            newslist: '',
            title: '新闻资讯',
            flag: false
        }
    },
    components: {
        'v-title': Ntitle
    }
    ,
    methods: {
        getnews() {
            this.$http.get(config.getnewslist).then(res => {
                if (res.body.status == 0) {
                    this.newslist = res.body.message;
                }
            })
        },
    },
    created() {
        this.getnews()
    }
}
</script>

<style lang="less">
.rfloat {
    float: right;
    color: #999
}

.mui-icon-extra-like {
    font-size: 15px;
    padding-right: 5px;
}

.cc {
    color: #999;
    font-size: 15px;
}

.nlist {
  
}
</style>
