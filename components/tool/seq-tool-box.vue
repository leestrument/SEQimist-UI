<template>
    
    <div class="seq-tool-box">

        
        <lee-toggle><svg-tool-cursor/></lee-toggle>
        <lee-toggle><svg-tool-pen-1/></lee-toggle>
        <lee-toggle><svg-tool-pen-2/></lee-toggle>
        <lee-toggle><svg-tool-pen-3/></lee-toggle>
        <lee-toggle><svg-tool-pen-4/></lee-toggle>
        <lee-toggle><svg-tool-pen-5/></lee-toggle>
        <lee-toggle><svg-tool-pen-6/></lee-toggle>
        <lee-toggle><svg-tool-pen-7/></lee-toggle>
        <lee-toggle><svg-tool-pen-8/></lee-toggle>
        <lee-toggle><svg-tool-pen-r/></lee-toggle>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import LeeToggle            from '../helper/lee-toggle.vue'
import SvgToolCursor        from '../svg/svg-tool-cursor.vue'
import SvgToolPen1          from '../svg/svg-tool-pen-1.vue'
import SvgToolPen2          from '../svg/svg-tool-pen-2.vue'
import SvgToolPen3          from '../svg/svg-tool-pen-3.vue'
import SvgToolPen4          from '../svg/svg-tool-pen-4.vue'
import SvgToolPen5          from '../svg/svg-tool-pen-5.vue'
import SvgToolPen6          from '../svg/svg-tool-pen-6.vue'
import SvgToolPen7          from '../svg/svg-tool-pen-7.vue'
import SvgToolPen8          from '../svg/svg-tool-pen-8.vue'
import SvgToolPenR          from '../svg/svg-tool-pen-r.vue'

export default defineComponent({

    components : {

        LeeToggle,
        
        SvgToolCursor, 
        SvgToolPen1, 
        SvgToolPen2, 
        SvgToolPen3, 
        SvgToolPen4, 
        SvgToolPen5, 
        SvgToolPen6, 
        SvgToolPen7, 
        SvgToolPen8, 
        SvgToolPenR,
    
    }

})

</script>

<style scoped>

    .seq-tool-box {

        background: linear-gradient(rgb(25, 25, 30), rgb(20, 20, 25));
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        padding: 10px;
        display: grid;
        grid-auto-flow: rows;

    }

</style>