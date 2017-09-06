<template>
    <footer>   
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#/goods/list/1">
                <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
				<span class="mui-tab-label">商城</span>
			</a>
			<a class="mui-tab-item" href="#cart/list" v-cloak>
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="mui-badge">{{$store.getters.get}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</a>
		</nav>
        <div class='c'></div>
    </footer>
</template>

<script>
import goods from '../../js/goods/gstrodata.js';
export default {
    data(){
		return{
			kucun:goods.get()
		}
	}
}
</script>

<style>
    .c{
        height: 50px;
    }
</style>

