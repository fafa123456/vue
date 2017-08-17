<template>
    <section class="goodsl">
        <v-title :title='title'></v-title>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(v,i) in goodsdetail" :key="i">
                <a :href="'#/goods/details/'+v.id">
                    <img class="mui-media-object" :src="v.img_url">
                    <p class='title'>{{v.title}}</p>
                    <!--<p>{{v.zhaiyao}}</p>-->
                    <div class="m-card-price">
                        <p>
                            ¥{{v.sell_price}}
                            <del>￥{{v.market_price}}</del>
                        </p>
                        <p>
                            <span>热卖中</span>
                            <span class="right">剩余{{v.stock_quantity}}件</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
        <button ref='moreBtn' type="button" class="mui-btn mui-btn-warning mui-btn-block" @click='getgoodslist'>点击加载更多</button>
    </section>
</template>

<script>
import config from '../../js/config.js'
import ctltle from '../public/title.vue'
export default {
    data() {
        return {
            goodsdetail: [],
            title: '商品列表',
            index: 1
        }
    },
    methods: {
        getgoodslist() {
            // console.log(this.$route.params.id);
            // let index=this.$route.params.id;
            this.$http.get(config.goodslist + this.index).then(res => {
                if (res.body.status == 0 && res.body.message.length > 0) {
                    this.goodsdetail.push(...res.body.message);
                    this.index++;
                } else if (res.body.message.length == 0) {
                    this.$refs.moreBtn.disabled = true;
                }
            })
        },
    },
    created() {
        this.getgoodslist();
    },
    components: {
        'v-title': ctltle
    },
}
</script>

<style lang='less'>
.mui-table-view-cell {
    a {
        padding-bottom: 80px;
        position: relative;
    }
}

.goodsl {
    p.title {
        height: 45px;
        width: 100%;
        text-align: left;
        word-break: break-all; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;        
    }
}

.m-card-price {
    box-sizing: border-box;
    text-align: left;
    p {
        height: 34px;
        background: #eee;
        padding: 10px;
    }
    .right {
        color: #8d8d8d;
        display: block;
        float: right;
        font: 400 12px '微软雅黑';
    }
}

.m-card-price p:first-child {
    font: 700 20px '微软雅黑';
    padding-left: .6em;
    color: red;
    del {
        color: #8d8d8d;
        padding-left: .8em;
        font: 400 15px '微软雅黑';
    }
}

.goodsl {
    .mui-btn-block {
        font-size: 15px;
        width: 40%;
        margin: 10px auto;
        padding: 5px 0;
    }
}
</style>


