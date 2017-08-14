<template>
    <section>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click='rollback'></a>
            <h2 class="mui-title">{{title}}</h2>
        </header>
        <div class='pad'></div>
    </section>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        rollback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang='less'>
.mui-bar-nav {
    top: 40px;
    position: fixed ;
    h2{
        color:#007aff;
    }
}
.pad{
    padding-top: 40px;
}
</style>
