const domian='http://139.199.192.48:8888/';
export default{
    getlubo:domian + 'api/getlunbo',
    getnewslist:domian+'api/getnewslist',
    getdetails:domian+'api/getnew/',
    getcomment:domian+'api/getcomments/',
    submitcomment:domian+'api/postcomment/',
    getimagelist:domian+'api/getimages/',
    getimgcategory:domian+'api/getimgcategory',
    getimgdetail:domian+'api/getimageInfo/',
    getdetailimg:domian+'api/getthumimages/',
    goodslist:domian+'api/getgoods?pageindex=',
    goodsdetails:domian+'api/getthumimages/',
    goodsprice:domian+'api/goods/getinfo/',//商品价格
    goodspicdl:domian+'api/goods/getdesc/',//图文详情接口
    cartlist:domian+'api/goods/getshopcarlist/',//购物车列表接口

}