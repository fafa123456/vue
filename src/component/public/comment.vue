<template>
    <div class="mui-card">
        <div class="mui-card-header">发表评论</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <textarea id="textarea" rows="5" placeholder="多行文本框" v-model="content"></textarea>
                <div>
                  <input type="button" ref='btn-more' class="mui-btn mui-btn-block mui-btn-outlined common" value="添加评论" @click='Submitcomment'>
                </div>
            </div>
        </div>
        <div class="mui-card-header topborder">评论列表</div>
        <div class="mui-card" style="margin-bottom: 35px;">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-for='(v,i) in comlist' :key='i'>
                    <div class="mui-collapse-content">
                        <p>
                            <span>{{v.user_name}}</span>
                            <span class="butr" v-if="v.add_time">{{v.add_time|time-filter}}</span>
                        </p>
                        <p>{{v.content}}</p>
                    </div>
                </li>
            </ul>
            <input type="button" ref='btn-more' class="mui-btn mui-btn-block mui-btn-outlined common" @click='getcomment' v-model="more">
        </div>
    </div>
</template>

<script>
import config from '../../js/config.js'
import { Toast } from 'mint-ui';
export default {
    props: ['id'],
    data() {
        return {
            content: '',
            pageIndex: 1,
            comlist: [],
            more:'点击加载更多'

        }
    },
    methods: {
        Submitcomment() {
            this.$http.post(config.submitcomment + this.id, { content: this.content }, { emulateJSON: true }).then(res => {
                if (res.body.status == 0) {
                    this.comlist.unshift({add_time:new Date(),"user_name":'匿名用戶',content:this.content})
                    this.content = '';
                    Toast({
                        message: '提交成功',
                        iconClass: 'icon icon-success'
                    });
                }
            })
        },
        getcomment() {
            let url = config.getcomment + this.id + "?pageindex=" + this.pageIndex;
            this.$http.get(url).then(res => {
                if(res.body.message.length<=0){
                    this.$refs['btn-more'].disabled=true;
                    return this.more='没有更多数据了~(≧▽≦)~'
                }
                this.comlist.push(...res.body.message);
                this.pageIndex++;
            })
        }
    }, created() {
        this.getcomment();


    }

}
</script>

<style>
.mui-card-content.common{
    padding-bottom: 33px;
}
.butr {
    position: absolute;
    right: 0;
}

.topborder {
    border-top: 1px solid #ccc;
}
.mui-btn-block.common{
    margin:0 auto 10px;
    display: block;
    width: 50%;
    padding: 12px 0;
    font-size: 15px;
}
</style>

