
<template>
    <div>
        <v-header> </v-header> 
        <!--<lg-preview></lg-preview>       -->
        <router-view></router-view>
        <v-footer> </v-footer>
    </div>
</template>

<script>
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
