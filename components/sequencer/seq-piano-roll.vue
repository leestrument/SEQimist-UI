<template>
    
    <div class='seq-piano-roll'>

        <seq-piano-roll-panel/>
        <seq-piano-roll-grid/>
        <seq-notes/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqPianoRollPanel from './seq-piano-roll-panel.vue'
import SeqPianoRollGrid from './seq-piano-roll-grid.vue'
import SeqNotes from '../note/seq-notes.vue'

export default defineComponent({

    components : { SeqPianoRollPanel, SeqPianoRollGrid, SeqNotes }

})

</script>

<style scoped>

    .seq-piano-roll {

        position: absolute;
        width : 100%;
        height : 100%;

    }

</style>