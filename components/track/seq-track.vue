<template>
    
    <div class="seq-track">

        <seq-track-label/>
        <seq-track-mute/>
        <seq-track-solo/>
        <seq-multi-sequencer/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTrackLabel        from './seq-track-label.vue'
import SeqTrackMute         from './seq-track-mute.vue'
import SeqTrackSolo         from './seq-track-solo.vue'
import SeqMultiSequencer    from '../sequencer/seq-multi-sequencer.vue'


export default defineComponent({

    components : {SeqTrackLabel, SeqTrackMute, SeqTrackSolo, SeqMultiSequencer}

})

</script>

<style scoped>

    .seq-track {

        border-bottom: 1px solid gray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 10fr;

    }


</style>