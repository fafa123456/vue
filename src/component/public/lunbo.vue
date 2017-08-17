<template>
    <section class='lunbo clearfix'>
        <mt-swipe :auto="4000" class='clearfix'>
            <mt-swipe-item v-for='(v,i) in lunbolist' :key='i'>
                <a :href="v.url">
                    <img :src='v.img' class='lunimg' />
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>
<script>
import congfig from '../../js/config.js'
export default {
    props: ['lunbolist'],
}
</script>

<style lang='less'>
.lunbo {
    height: 200px;
    .lunimg {
        width: 100%;
        height: 200px;
    }
    background: rgba(221, 221, 221, .5);
}

.clearfix {
    &:after {
        content: '';
        clear: both;
        display: block;
    }
}
</style>
