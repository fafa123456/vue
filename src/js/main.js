import Vue from 'vue';
import VueRouter from 'vue-router';
import vuex from 'vuex';
import VueResource from 'vue-resource';
import MintUi from 'mint-ui';//引入mint ui插件
import Vuepicview from 'vue-picture-preview'
import VuePreview from 'vue-preview'

import cRout from '../component/app.vue';
import routerConfig from './router.js';
import vuexgoods from './vuex/goods.js';
import { Indicator } from 'mint-ui';
import '../../node_modules/mint-ui/lib/style.css'
import '../../node_modules/mui/dist/css/mui.css'
import '../../node_modules/mui/examples/hello-mui/css/icons-extra.css'
Vue.use(VueRouter);
Vue.use(vuex);
Vue.use(VueResource);
Vue.use(MintUi);
Vue.use(Vuepicview);
Vue.use(VuePreview);

Vue.filter('time-filter', function (time) {
    return time.slice(0, 10).split('-').join('/') + '  ' + time.slice(11, 19)
});
Vue.http.interceptors.push(function (req, next) {
    Indicator.open('Loading...');
    next(function(resp){
        Indicator.close();
    })
})
new Vue({
    el: '#box',
    render: function (c) {
        return c(cRout);
    },
    router: routerConfig,
    store: new vuex.Store(vuexgoods)
})

