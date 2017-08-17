<template>
    <header id="header" class="mui-bar mui-bar-nav phead">    
        <ul>
            <li class="" v-for='(v,i) in category' :key="i">
                <a :href="'#/picture/list/'+ v.id" @click='getcate(v.title)'>{{v.title}}</a>
            </li>
        </ul>
    </header>
</template>

<script>
import config from '../../js/config.js'
export default {
    data() {
        return {
            category: [],
            clicktitle: ''
        }
    },
    methods: {
        getimgcategory() {
            this.$http.get(config.getimgcategory).then(res => {
                if (res.body.status == 0) {
                    this.category = res.body.message
                }
            })
        }, getcate(title) {
            this.clicktitle = title;
        }
    },
    created() {
        this.getimgcategory()
    }, sends() {
        this.$emit('getcate', this.clicktitle)
    }
}
</script>

<style lang='less'>
.phead {
    top: 40px;
    overflow: hidden;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 15px;
        li {
            float: left;
            padding-left: 10px;
            color: #26a2ff
        }
    }
}
</style>
