<template>
    <article class="shopcart-list">
        <!-- 商品列表 -->
        <div class="goods" v-for='v in cartlist' :key='v.id'>
            <mt-switch class="switch" v-model="v.select"></mt-switch>
            <img class="img" :src="v.src">
            <div class="inforight">
                <h4 class="mui-ellipsis-2">{{v.title}}</h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{v.sell_price}}</li>
                        <li>
                            <v-numbox :total='gettotal(v.id)' @backvalue='getsondata(v.id,$event)'></v-numbox>
                        </li>
                        <li>
                            <a href="javascript:void(0)" @click='remove(v.id)'>删除</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <!-- 总价 -->
        <div class="total">
            <div class="total_val">
                <ul>
                    <li>总计（不含运费）</li>
                    <li>已勾选商品{{sumtotal}}件,总价:￥{{sumprice}}元</li>
                </ul>
            </div>
            <div class="total_btn">
                <mt-button type="primary">付 款</mt-button>
            </div>
        </div>
    
    </article>
</template>

<script>
import config from '../../js/config.js';
import goods from '../../js/goods/gstrodata.js';
import numbox from '../public/numchang.vue';
export default {
    data() {
        return {
            cartlist: [],
        }
    },
    methods: {
        getcartlist() {
            let url = config.cartlist + this.$store.getters.getTotalgoodsid;
            this.$http.get(url).then(res => {
                if (res.body.status == 0) {
                    this.cartlist = res.body.message.map((v) => {
                        v["select"] = true;
                        v.src = "http://ofv795nmp.bkt.clouddn.com/" + v.thumb_path;
                        return v;
                    });
                }
            })
        },
        gettotal(id) {
            return this.$store.state[id];
        },
        getsondata(id, val) {
            this.$store.commit('set', { id, val });
        }, remove(id) {
            this.$store.commit('redata', id + '');
            let index = this.cartlist.findIndex(item => item.id == id);
            index != -1 && this.cartlist.splice(index, 1);
        }
    }, created() {
        this.getcartlist();
    },
    computed: {
        sumtotal() {
            let arr=this.cartlist.map(v => v.select ? +this.$store.state[v.id + ''] : 0)
            return arr.length > 0 && arr.reduce((v1, v2) => v1 + v2);
        },
        sumprice() {
            let arrP=this.cartlist.map(v => v.select ? +this.$store.state[v.id + ''] * v.sell_price : 0);
            return arrP.length > 0 && arrP.reduce((v1, v2) => v1 + v2);
        }
    },
    components: {
        'v-numbox': numbox
    }
}
</script>

<style lang="less">
.shopcart-list {
    .goods {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        height: 102px;
        display: flex;
        padding: 5px;
        .switch {
            flex: 0 0 52px;
        }
        .img {
            margin-left: 5px;
            height: 75px;
            width: 75px;
            flex: 0 0 85px;
        }
        .inforight {
            margin-left: 5px;
            flex: 1;
        }
        .inforight ul {
            padding-left: 0px;
        }
        .inforight li {
            list-style: none;
            display: inline-block;
        }
        .inforight h4 {
            color: #0094ff;
            font-size: 14px;
        }
        .bottom li:first-child {
            color: red;
            margin-right: 5px;
        }
        .bottom li:last-child {
            margin-left: 5px;
        }
    }
    .total {
        height: 84px;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 5px 14px;
        ul {
            padding-left: 0px;
            margin: 14px 0;
            li {
                list-style: none;
                font-size: 14px;
            }
        }
        &_val {
            flex: 1;
        }
        &_btn {
            flex: 0 0 60px;
            margin: 18px 0 0 0;
        }
    }
}
</style>

