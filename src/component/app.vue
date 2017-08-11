
<template>
    <div>
        <cHeader> </cHeader>
        
        <cFooter> </cFooter>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router';
import cFooter from './public/footer.vue'
import cHeader from './public/header.vue'
export default {
    components: {
        'v-header': cHeader,
        'v-footer': cFooter
    }
}
</script>

<style>

</style>
