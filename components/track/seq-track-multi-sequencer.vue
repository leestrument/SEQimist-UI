<template>
    
    <div class="seq-track-multi-sequencer">

        <seq-piano-roll     v-if="isPianoRoll"  :color="color"/>
        <seq-step-sequencer v-else              :color="color"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqPianoRoll         from '../piano-roll/seq-piano-roll.vue'
import SeqStepSequencer     from '../step-sequencer/seq-step-sequencer.vue'

export default defineComponent({

    props : { color : { type : String, required : true } },
    components : { SeqPianoRoll, SeqStepSequencer },
    setup() {

        const isPianoRoll = Math.random() > 0.5

        return { isPianoRoll }


    }

})

</script>

<style scoped>

    .seq-track-multi-sequencer {

        position: relative;

    }

</style>