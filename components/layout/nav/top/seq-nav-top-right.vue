<template>
    
    <div class="seq-nav-top-right">

        <seq-timeline-menu/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqTimelineMenu from '../../../timeline/seq-timeline-menu.vue'

export default defineComponent({

    components : { SeqTimelineMenu }

})

</script>

<style scoped>

    .seq-nav-top-right {

        position: absolute;
        right: 10px;
        width: 10%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 10px;
        padding-bottom: 5px;

    }

</style>