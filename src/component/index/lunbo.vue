<template>
    <section class='lunbo clearfix'>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(v,i) in list' :key='i'>
                <a :href="v.url"><img :src='v.img' class='lunimg'/></a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>
<script>
import congfig from '../../js/config.js'
export default {
    data(){
        return {
            list:'',
        }
    },
    methods:{
        getlunbo(){
           
            this.$http.get(congfig.getlubo).then((res)=>{
                this.list=res.body.message                
            })
        }
    },
     created:function(){
         this.getlunbo();
     }

}
</script>

<style lang='less'>
    .lunbo{
        height: 240px;
        .lunimg{
            width:100%;
            height: 100%;
        }
    }
    .clearfix{
         &:after{
            content: '';
            clear: both;
            display: block;
        }
    }
</style>
