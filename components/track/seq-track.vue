<template>
    
    <div class="seq-track">
    
        <seq-track-header :track-index="trackIndex"/>
        <seq-track-mute/>
        <seq-track-solo/>
        <seq-track-multi-sequencer :track-index="trackIndex"/>
        <seq-track-border v-if="isSelected" :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqTrackHeader                   from './seq-track-header.vue'
import SeqTrackMute                     from './seq-track-mute.vue'
import SeqTrackSolo                     from './seq-track-solo.vue'
import SeqTrackMultiSequencer           from './seq-track-multi-sequencer.vue'
import SeqTrackBorder                   from './seq-track-border.vue'

export default defineComponent({ 
    
    components  : { SeqTrackHeader, SeqTrackMute, SeqTrackSolo, SeqTrackMultiSequencer, SeqTrackBorder },
    props       : { trackIndex : { type : Number, required : true }},
    setup(props) {

        const store         = useStore()
        const isSelected    = computed(() => store.getters.isSelectedTrack(props.trackIndex))

        return { isSelected }

    } 

})

</script>

<style scoped>

    .seq-track {

        /* border-radius: 4px; */
        /* box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 2px black; */
        flex-grow: 1; /* parent display is flex, to stretch height, we need this. */
        position: relative;
        display: grid;
        grid-template-columns: var(--track-column-ratio);
        gap: 1px;

    }

</style>