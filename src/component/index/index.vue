<template>
    <div>
        <v-lunbo></v-lunbo>
        <v-nav></v-nav>
    </div>
</template>

<script>
import cLunBo from './lunbo.vue';
import cNav from './nav.vue';
export default {
components: {
        'v-nav': cNav,
        'v-lunbo':cLunBo
    }
}
</script>

<style>

</style>
