<template>
    
    <div 
    
        class="seq-track"
        :style="isSelected ? { border : `1px solid ${color}`} : null"
    
    >
        <seq-track-header :color="color"/>
        <seq-track-mute/>
        <seq-track-solo/>
        <seq-track-multi-sequencer :color="color"/>
    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqTrackHeader           from './seq-track-header.vue'
import SeqTrackMute             from './seq-track-mute.vue'
import SeqTrackSolo             from './seq-track-solo.vue'
import SeqTrackMultiSequencer   from './seq-track-multi-sequencer.vue'

export default defineComponent({ 
    
    components : { SeqTrackHeader, SeqTrackMute, SeqTrackSolo, SeqTrackMultiSequencer },
    setup() {

        const color = `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`
        const isSelected = Math.random() > 0.5

        return { color, isSelected }

    } 

})

</script>

<style scoped>

    .seq-track {

        /* border-radius: 4px; */
        /* box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 2px black; */

        display: grid;
        grid-template-columns: var(--track-column-ratio);
        gap: 1px;

        box-sizing: border-box;
        /* border: 10px solid white; */

    }

</style>