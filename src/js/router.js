import Vue from 'vue'
import VueRouter from 'vue-router';
import cIndex from '../component/index/index.vue';
import cNews from '../component/news/list.vue';
import cDetails from '../component/news/details.vue';
import PictureS from '../component/Pictureshar/Picturelist.vue';
import Picdetails from '../component/Pictureshar/Picdetails.vue';
import goodslist from '../component/goods/goodslist.vue';
import goodsdetails from '../component/goods/goodsdetails.vue';
import cartList from '../component/shopcart/list.vue';

export default new VueRouter({
    routes:[
        {path:'/',redirect:'index'},//如果是空路由就匹配到首页路由
        {path:'/index',component:cIndex},//首页的路由
        {path:'/news/list',component:cNews},//新闻列表的路由
        {path:'/news/details/:id',component:cDetails},//新闻详情的路由
        {path:'/picture/list/:id',component:PictureS},//图片分享列表的路由
        {path:'/picture/picdetails/:id',component:Picdetails},//图片分享列表的路由
        {path:'/goods/list/:id',component:goodslist},//商品列表的路由
        {path:'/goods/details/:id',component:goodsdetails},//商品详情的路由
        {path:'/cart/list',component:cartList},//购物车列表路由
        ]
})