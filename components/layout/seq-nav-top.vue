<template>
    
    <div class="seq-nav-top">

        <seq-nav-top-left/>
        <seq-nav-top-center/>
        <seq-nav-top-right/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNavTopCenter      from './seq-nav-top-center.vue'
import SeqNavTopLeft        from './seq-nav-top-left.vue'
import SeqNavTopRight       from './seq-nav-top-right.vue'

export default defineComponent({

    components : { SeqNavTopLeft, SeqNavTopCenter, SeqNavTopRight }

})

</script>

<style scoped>

    .seq-nav-top {

        position: relative;
        background: coral;
        /* padding: 10px 10px 5px 10px; */

    }

</style>