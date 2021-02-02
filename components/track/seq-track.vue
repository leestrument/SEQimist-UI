<template>
    
    <div class='seq-track'>

        <seq-track-mute         :track-index="trackIndex"/>
        <seq-track-solo         :track-index="trackIndex"/>
        <seq-track-header       :track-index="trackIndex"/>
        <seq-multi-sequencer    :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTrackMute         from './seq-track-mute.vue'
import SeqTrackSolo         from './seq-track-solo.vue'
import SeqTrackHeader       from './seq-track-header.vue'
import SeqMultiSequencer    from '../sequencer/seq-multi-sequencer.vue'

export default defineComponent({

    components : { SeqTrackMute, SeqTrackSolo, SeqTrackHeader, SeqMultiSequencer },
    props : { trackIndex : { type : Number, required : true }}

})

</script>

<style scoped>

    .seq-track {

        display: grid;
        grid-template-columns: 0.5fr 0.5fr 1fr 20fr;

    }
    
    .seq-track-activator {

        display: grid;
        grid-auto-flow: row;

    }

</style>