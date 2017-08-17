<template>
    <section class='numbox'>
        <span class='btn-sl'>购买数量: </span>
        <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click='goodsup(shu-1)'>-</button>
            <input class="mui-input-numbox" type="text" v-model='shu' :value="shu">
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click='goodsup(shu+1)'>+</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            shu: this.total
        }
    },
    props: ['total'],
    methods: {
        goodsup(arg) {
            arg = arg < 1 ? 1 : arg;
            this.shu = arg;
            // this.total = arg
        }, sends: function () {
            this.$emit('backvalue', this.shu)
        }
    }, watch: {
        shu:"sends"
    }
}
</script>

<style lang='less'>
.numbox {
    color: #8f8f94;
    .mui-numbox {
        width: 140px;
        height: 35px;
    }
}
</style>

