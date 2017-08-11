import Vue from 'vue';
import VueRouter from 'vue-router';
import cRout from '../component/app.vue';
Vue.use(VueRouter)
new Vue({
    el:'#box',
    render: function (c) {
        return c(cRout);
    }
})