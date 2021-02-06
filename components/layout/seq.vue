<template>
    
    <div class='seq'>

        <seq-header/>
        <seq-timeline/>
        <seq-editor/>
        <seq-inspector/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqHeader            from './seq-header.vue'
import SeqTimeline          from '../timeline/seq-timeline.vue'
import SeqEditor            from './seq-editor.vue'
import SeqInspector         from './seq-inspector.vue'

export default defineComponent({ components : { SeqHeader, SeqTimeline, SeqEditor, SeqInspector } })

</script>

<style scoped>

    .seq {

        width : 100%;
        height : 100%;
        background: rgb(40, 40, 50);

        /* layout */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.13fr 0.5fr 2.3fr;
        gap: 0px 0px;
        grid-template-areas:
            "header header header header"
            "timeline timeline timeline timeline"
            "editor editor editor inspector";
            
    }

    .seq-header     { grid-area: header; }
    .seq-timeline   { grid-area: timeline; }
    .seq-editor     { grid-area: editor; }
    .seq-inspector  { grid-area: inspector; }

</style> 