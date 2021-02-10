<template>
    
    <div class="seq-clip-inspector">

        <seq-clip-color-panel/>
        <seq-clip-track-count-panel/>
        <seq-clip-scale-panel/>
        <seq-clip-preset-panel/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqClipColorPanel        from './color/seq-clip-color-panel.vue'
import SeqClipPresetPanel       from './preset/seq-clip-preset-panel.vue'
import SeqClipScalePanel        from './scale/seq-clip-scale-panel.vue'
import SeqClipTrackCountPanel   from './track-count/seq-clip-track-count-panel.vue'

export default defineComponent({ components : { SeqClipColorPanel, SeqClipTrackCountPanel, SeqClipScalePanel, SeqClipPresetPanel } })

</script>

<style scoped>

    .seq-clip-inspector {

        position: absolute;
        width : 100%;
        height : 100%;

        display: grid;
        grid-template-rows: 0.5fr 0.2fr 1fr 1fr 0.5fr; 
        gap: 10px;

    }

</style>