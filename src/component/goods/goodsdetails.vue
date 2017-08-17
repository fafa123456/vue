<template>
    <section class='goodsdetail'>
        <v-title :title='title'></v-title>
        <v-lunbo :lunbolist='goodsdetl'></v-lunbo>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <div class="gbk">
                    <h4 class='btn-sl'>{{goodsprice.title}}</h4>
                    <div class="m-card-price">
                        <p>
                            <del>市场价:￥{{goodsprice.market_price}}</del>
                            现价:￥{{goodsprice.sell_price}}
                        </p>
                    </div>
                    <v-numbox :total='total' @backvalue='gettotal'></v-numbox>
                    <div>
                        <button type="button" class="mui-btn mui-btn-warning mui-btn-block" @click='addcart'>加入购物车</button>
                        <button type="button" class="mui-btn mui-btn-danger mui-btn-block" @click='gobuy'>立即购买</button>
                    </div>
                    <div style="color: #333;">
                        <h4>商品参数</h4>
                        <p>商品货架号:{{goodsprice.goods_no}}</p>
                        <p>库存:{{goodsprice.stock_quantity}}</p>
                        <p v-if='goodsprice.add_time'>上架时间:{{goodsprice.add_time|time-filter}}</p>
                    </div>
                </div>
            </div>
            <div class="gbk">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">商品评论</mt-tab-item>
                    <mt-tab-item id="2">图文介绍</mt-tab-item>
                </mt-navbar>
                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <v-comment :id='id'></v-comment>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <v-twxq :id='id'></v-twxq>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    
    </section>
</template>
<script>
import config from '../../js/config.js'
import cLunBo from '../public/lunbo.vue'
import ctltle from '../public/title.vue'
import Commentm from '../public/comment.vue'
import cTwxq from './son/detailstwxq.vue';
import numbox from '../public/numchang.vue';
import strorage from '../../js/localstorage/storage.js';
import goods from '../../js/goods/gstrodata.js';

export default {
    data() {
        return {
            goodsdetl: '',
            goodsprice: [],
            shul: 1,
            title: '商品详情',
            selected: '',
            id: this.$route.params.id,
            total:goods.get(this.$route.params.id)
        }
    },
    methods: {
        getdetails() {
            this.$http.get(config.goodsdetails + this.id).then(res => {
                if (res.body.status == 0) {
                    this.goodsdetl = res.body.message;
                    this.goodsdetl = res.body.message.map((v) => {
                        return { img: "http://ofv795nmp.bkt.clouddn.com/" + v.src }
                    })
                }
            })
        },
        getgoodsprice() {
            this.$http.get(config.goodsprice + this.id).then(res => {
                if (res.body.status == 0) {
                    this.goodsprice = res.body.message[0];
                }
            })
        },
        gettotal(value) {
            this.total = value;
        }, gobuy() {

        }, addcart() {
            goods.set(this.id, this.total);
            document.getElementById('mui-badge').innerText = goods.get();
        }

    },
    created() {
        this.getdetails();
        this.getgoodsprice()
    }, components: {
        'v-lunbo': cLunBo,
        'v-title': ctltle,
        'v-comment': Commentm,
        'v-twxq': cTwxq,
        'v-numbox': numbox
    }
}
</script>

<style lang='less'>
.goodsdetail {
    font-size: 15px;
    color: #8f8f94;
    .gbk {
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 15px;
        .mint-navbar {
            border: 1px solid #26a2ff;
            .mint-tab-item.is-selected {
                margin-bottom: -1px;
            }
        }
        .mint-navbar a:first-child {
            border-right: 1px solid;
        }
        .mint-tab-item-label {
            font-size: 15px;
            line-height: 15px;
        }
    }
    .mui-btn-block.more {
        width: 95%;
        display: block;
        margin-right: 10px;
    }
    .lunbo {
        text-align: center;
        background: #fff;
        .lunimg {
            width: 230px;
            height: 200px;
        }
    }
    .mui-btn-block {
        width: 38%;
        display: inline-block;
        height: 40px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 0;
        font-size: 16px;
    }

    .m-card-price p:first-child {
        font: 600 18px '微软雅黑';
        padding-left: .3em 0 0 .7em;
        color: red;
        del {
            text-indent: 5px;
            color: #8d8d8d;
            padding: 0 .8em;
            font: 400 15px '微软雅黑';
        }
    }
    .btn-sl {
        font: 400 16px '微软雅黑';
        padding-left: 10px;
        padding-right: 10px;
    }
    h4 {
        font: 500 16px '微软雅黑';
        color: #8f8f94;
        padding-bottom: 10px;
        border-bottom: 2px solid #ddd;
    }
    .mui-card-content-inner {
        border: 1px solid #ddd;
    }
    .mint-swipe-indicator.is-active {
        border: 1px solid;
    }
}
</style>


