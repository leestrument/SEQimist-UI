<template>
    
    <div class="seq-track-multi-sequencer">

        <seq-piano-roll     v-if="hasPianoRoll"  :track-index="trackIndex"/>
        <seq-step-sequencer v-else               :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqPianoRoll                     from '../piano-roll/seq-piano-roll.vue'
import SeqStepSequencer                 from '../step-sequencer/seq-step-sequencer.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true } },
    components  : { SeqPianoRoll, SeqStepSequencer },
    setup(props) {

        const store = useStore()
        const hasPianoRoll = computed(() => store.getters.hasPianoRoll(props.trackIndex))

        return { hasPianoRoll }

    }

})

</script>

<style scoped>

    .seq-track-multi-sequencer {

        position: relative;

    }

</style>