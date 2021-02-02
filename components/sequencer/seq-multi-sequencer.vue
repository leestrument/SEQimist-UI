<template>
    
    <div class='seq-multi-sequencer'>

        <seq-piano-roll :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqPianoRoll from './seq-piano-roll.vue'
import SeqStepSequencer from './seq-step-sequencer.vue'

export default defineComponent({

    components : { SeqPianoRoll, SeqStepSequencer },
    props : { trackIndex : { type : Number, required : true }}, 

})

</script>

<style scoped>

    .seq-multi-sequencer {

        position: relative;

    }

</style>