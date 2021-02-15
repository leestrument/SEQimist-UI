<template>
    
    <div class="seq-track">
    
        <seq-track-header :color="color"/>
        <seq-track-mute/>
        <seq-track-solo/>
        <seq-track-multi-sequencer :index="index" :color="color"/>
        <seq-track-border v-if="isSelected"/>

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
    props       : { index : { type : Number, required : true }},
    setup(props) {

        const color         = `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`
        const store         = useStore()
        const isSelected    = computed(() => store.getters.isSelectedTrack(props.index))

        return { color, isSelected }

    } 

})

</script>

<style scoped>

    .seq-track {

        /* border-radius: 4px; */
        /* box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 2px black; */

        position: relative;
        display: grid;
        grid-template-columns: var(--track-column-ratio);
        gap: 1px;

    }

</style>