<template>
    
    <div class="seq-track-multi-sequencer">

        <seq-step-sequencer/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqStepSequencer     from '../step-sequencer/seq-step-sequencer.vue'

export default defineComponent({

    components : { SeqStepSequencer }

})

</script>

<style scoped>

    .seq-track-multi-sequencer {

        position: relative;

    }

</style>