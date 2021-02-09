<template>
    
    <div class="piano-roll">

        <seq-piano-roll-panels/>
        <seq-piano-roll-grids/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqPianoRollGrids    from './seq-piano-roll-grids.vue'
import SeqPianoRollPanels   from './seq-piano-roll-panels.vue'

export default defineComponent({

    components : { SeqPianoRollPanels, SeqPianoRollGrids }

})

</script>

<style scoped>

    .piano-roll {

        position: absolute;
        width : 100%;
        height : 100%;

    }

</style>