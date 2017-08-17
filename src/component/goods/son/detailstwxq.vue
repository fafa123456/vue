<template>
    <!--图文详情 twxq-->
    <section class='twxq'>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">{{info.title}}</div>
            <!--内容区-->
            <div class="mui-card-content" v-html='info.content'></div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer">页脚</div>
        </div>
    </section>
</template>

<script>
import config from '../../../js/config.js'
export default {
    data() {
        return {
            info: {}
        }
    },
    methods: {
        getpicdel() {
            this.$http.get(config.goodspicdl + this.id).then(res => {
                // console.log(res.body);
                if (res.body.status == 0) {
                    this.info = res.body.message[0];
                }
            })
        }

    },
    props: ['id'],
    created() {
        this.getpicdel();
    }
}
</script>

<style lang='less'>
.twxq {
    font-size: 0;
    .mui-card {
        padding: 10px;
        font-size: 0;
        vertical-align: middle;
        img {
            width: 100%;
            display: block;
        }
        p {
            margin-bottom: 0;
        }
    }
}
</style>


