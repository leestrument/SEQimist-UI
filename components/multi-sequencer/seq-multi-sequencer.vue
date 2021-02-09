<template>
    
    <div class="seq-multi-sequencer">

        <seq-piano-roll     v-if="isPianoRoll"/>
        <seq-step-sequencer v-else/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqPianoRoll         from '../pianor-roll/seq-piano-roll.vue'
import SeqStepSequencer     from '../step-sequencer/seq-step-sequencer.vue'

export default defineComponent({

    components : { SeqPianoRoll, SeqStepSequencer },
    setup() {

        const isPianoRoll = true

        return { isPianoRoll }

    }

})

</script>

<style scoped>

    .seq-multi-sequencer {

        position: relative;

    }

</style>