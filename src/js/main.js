import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUi from 'mint-ui';//引入mint ui插件 


import cRout from '../component/app.vue';
import routerConfig from './router.js';
import '../../node_modules/mint-ui/lib/style.css'
import '../../node_modules/mui/dist/css/mui.css'
import '../../node_modules/mui/examples/hello-mui/css/icons-extra.css'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUi);
new Vue({
    el: '#box',
    render: function (c) {
        return c(cRout);
    },
    router: routerConfig
})

Vue.filter('time-filter', function (time) {
    return time.slice(0,10).split('-').join('/')+'  '+time.slice(11,19)
})