import storage from '../localstorage/storage.js'
const storageKey = 'goodsTotal';
let goodsTotal = storage.getCurrentid(storageKey) || {};
export default {
    // 根据id存储选择数量
    set(id, total) {
        goodsTotal[id] = total;
        storage.setCurrentid(storageKey, goodsTotal);
    },// 根据id获取选择数量，没有id则获取全部商品的选择数量总和
    get(id) {
        if (id) {
            return +goodsTotal[id] || 0;
        } else {
            // 注意，如果数组length为0，reduce会报错，所以做个判断处理
            let totals = this.getTotalList();
            return totals.length && totals.reduce((v1, v2) => (+v1) + (+v2));
        }
    }, getTotalList() {
        return Object.values(goodsTotal);
    }, getTotalgoodsid() {
        return Object.keys(goodsTotal);
    },redata(id) {
        console.log(1213);
    
        delete goodsTotal[id+'']
        storage.setCurrentid(storageKey, goodsTotal);
    }
}