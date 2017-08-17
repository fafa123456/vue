'use strict'
//四个函数    获取当前id下的商品数量  获取全部商品数量
//设置当前id下的购物车中商品数两

export default {

    //设置当前id下的购物车中商品数两   
    setCurrentid(key, val) {
        let strval
        try {
            strval = JSON.stringify(val)
        } catch (e) {
            strval = val;
        } finally {
            localStorage.setItem(key, strval);
        }
    },
    //获取当前id下的购物车中商品数两
    getCurrentid(id) {
        let strData = localStorage.getItem(id);
        let result;
        try {
            result = JSON.parse(strData);
        } catch (e) {
            result = {};
        } finally {
            return result || {};

        }
    },
    //获取全部商品数量
    // gettotal() {
    //     let result=Object.values(localStorage);
    //     console.log(result); 
    //     return result.reduce((v1, v2) => {
    //         return (+v1) + (+v2)
    //     })
    // }

}