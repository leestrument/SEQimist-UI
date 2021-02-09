<template>
    
    <div class="seq-track" :style="{ top : top }">

        <seq-track-header       :index="index"/>
        <seq-track-mute         :index="index"/>
        <seq-track-solo         :index="index"/>
        <seq-multi-sequencer    :index="index"/>        

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import SeqTrackHeader                   from './seq-track-header.vue'
import SeqTrackMute                     from './seq-track-mute.vue'
import SeqTrackSolo                     from './seq-track-solo.vue'
import SeqMultiSequencer                from '../multi-sequencer/seq-multi-sequencer.vue'

export default defineComponent({

    props : { index : { type : Number, required : true } },
    components : { SeqTrackHeader, SeqTrackMute, SeqTrackSolo, SeqMultiSequencer },
    setup(props) {

        const top = computed(() => props.index * 6.25 + '%')

        return { top }

    }

})

</script>

<style scoped>

    .seq-track {

        position: absolute;
        width : calc(100% - 4px);
        height : calc(6.25% - 2px);
        border: 2px solid rgb(40, 40, 45);
        background: rgb(50, 50, 55);

        display: grid;
        grid-template-columns: 0.06fr 0.03fr 0.03fr 1fr;

    }

</style>