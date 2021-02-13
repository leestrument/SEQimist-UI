<template>
    
    <div class="seq-header child-is-center">

        <lee-toggle class="seq-toggle-logo"><svg-seqimist/></lee-toggle>
        <seq-browser/>
        <seq-timeline-menu/>
        <lee-toggle class="seq-toggle-leestrument-logo"><svg-leestrument/></lee-toggle>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import LeeToggle                from '../../helper/lee-toggle.vue'
import SvgSeqimist              from '../../svg/svg-seqimist.vue'
import SvgLeestrument           from '../../svg/svg-leestrument.vue'
import SeqBrowser               from '../../browser/seq-browser.vue'
import SeqTimelineMenu          from '../../timeline/seq-timeline-menu.vue'


export default defineComponent({

    components: { 
        
        LeeToggle,
        SvgSeqimist,
        SvgLeestrument,
        SeqBrowser,
        SeqTimelineMenu,
        
    }

})
        
</script>

<style scoped>

    .seq-header { position: relative; }
        
    .seq-toggle-logo {

        position: absolute;
        left: 0;
        width: 180px;
        height: 100%;
        fill: rgb(200, 200, 200);

    }

    .seq-toggle-leestrument-logo {

        position: absolute;
        right: 0;
        width: 35px;
        height: 100%;
        fill: rgb(150, 150, 150);

    }

</style>