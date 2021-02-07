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
import SeqMultiSequencer                from '../sequencer/seq-multi-sequencer.vue'

export default defineComponent({

    props : { index : { type : Number, required : true } },
    components : { SeqTrackHeader, SeqTrackMute, SeqTrackSolo, SeqMultiSequencer },
    setup(props) {

        const top = computed(() => (32 - props.index - 1) * 6.25 + '%')

        return { top }

    }

})

</script>

<style scoped>

    .seq-track {

        position: absolute;
        width : 100%;
        height : 6.25%;
        background: tomato;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(60, 60, 60);

        display: grid;
        grid-template-columns: 0.06fr 0.03fr 0.03fr 1fr;

    }

</style>