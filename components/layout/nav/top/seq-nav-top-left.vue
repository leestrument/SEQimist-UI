<template>
    
    <div class="seq-nav-top-left">

        <seq-logo/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqLogo              from '../../../logo/seq-logo.vue'

export default defineComponent({

    components : { SeqLogo }

})

</script>

<style scoped>

    .seq-nav-top-left {

        position: absolute;
        left: 10px;
        width: 10%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 10px;
        /* padding-bottom: 5px; */

    }

</style>