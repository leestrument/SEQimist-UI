<template>
    
    <div class='seq-multi-sequencer'>

        <seq-piano-roll/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqPianoRoll from './seq-piano-roll.vue'
import SeqStepSequencer from './seq-step-sequencer.vue'

export default defineComponent({

    components : { SeqPianoRoll, SeqStepSequencer}

})

</script>

<style scoped>

    .seq-multi-sequencer {

        position: relative;

    }

</style>