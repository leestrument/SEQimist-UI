<template>
    
    <div class="seq-clip-inspector">

        <lee-label-box label="Color"><seq-clip-color-panel/></lee-label-box>
        <lee-label-box label="Track Count"><seq-clip-track-count-panel/></lee-label-box>
        
        <seq-clip-scale-panel/>
        <seq-clip-preset-panel/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'

import LeeLabelBox              from '../../helper/lee-label-box.vue'
import SeqClipColorPanel        from './color/seq-clip-color-panel.vue'
import SeqClipPresetPanel       from './preset/seq-clip-preset-panel.vue'
import SeqClipScalePanel        from './scale/seq-clip-scale-panel.vue'
import SeqClipTrackCountPanel   from './track-count/seq-clip-track-count-panel.vue'

export default defineComponent({ components : { LeeLabelBox, SeqClipColorPanel, SeqClipTrackCountPanel, SeqClipScalePanel, SeqClipPresetPanel } })

</script>

<style scoped>

    .seq-clip-inspector {

        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 60px 1fr 1fr; 
        gap: 10px;

    }

</style>