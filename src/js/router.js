import Vue from 'vue'
import VueRouter from 'vue-router';
import cIndex from '../component/index/index.vue';
import cNews from '../component/news/list.vue';
import cDetails from '../component/news/details.vue';

export default new VueRouter({
    routes:[
        {path:'/',redirect:'index'},
        {path:'/index',component:cIndex},
        {path:'/news/list',component:cNews},
        {path:'/news/details/:id',component:cDetails},
        ]
})