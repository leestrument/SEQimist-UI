<template>
    
    <div class="seq-track">
        <seq-track-header/>
        <seq-track-mute/>
        <seq-track-solo/>
        <seq-track-multi-sequencer/>
    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqTrackHeader           from './seq-track-header.vue'
import SeqTrackMute             from './seq-track-mute.vue'
import SeqTrackSolo             from './seq-track-solo.vue'
import SeqTrackMultiSequencer   from './seq-track-multi-sequencer.vue'

export default defineComponent({ components : { SeqTrackHeader, SeqTrackMute, SeqTrackSolo, SeqTrackMultiSequencer } })

</script>

<style scoped>

    .seq-track {

        /* border-radius: 4px; */
        /* box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 2px black; */

        display: grid;
        grid-template-columns: var(--track-column-ratio);
        gap: 4px;

    }

</style>