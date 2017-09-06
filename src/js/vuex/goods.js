import storage from '../localstorage/storage.js'
import Vue from 'vue'
const storageKey = 'goodsTotal';
export default {
    state: storage.getCurrentid(storageKey) || {},//相当于data配置
    getters: {//相当于computed技术属性值
        getTotalList(state) {
            return Object.values(state);
        }, getTotalgoodsid(state) {
            return Object.keys(state);
        }, get(state, getters) {
            // 注意，如果数组length为0，reduce会报错，所以做个判断处理
            let totals = getters.getTotalList;
            return totals.length && totals.reduce((v1, v2) => (+v1) + (+v2));
        }
    },
    mutations: {//相当于mathods方法
        set(state, arr) {
            Vue.set(state, arr.id, arr.val);
            storage.setCurrentid(storageKey, state);
        }, redata(state, id) {
            Vue.set(state, id, null);
            delete state[id];
            storage.setCurrentid(storageKey, state);
        }
    }
}