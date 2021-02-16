<template>
    
    <div class="seq-piano-roll">

        <seq-piano-roll-beat-divider/>
        <seq-piano-roll-grid :track-index="trackIndex"/>
        <seq-note-box
        
            v-for="(e, i) in noteCount"
            :key="i"
            :style="{

                left : noteStarts[i] + '%',
                width : noteDuration - 1 + '%',
                   
            }"
            :track-index="trackIndex"
            v-show="Math.random() > 0.5"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqPianoRollBeatDivider  from './seq-piano-roll-beat-divider.vue'
import SeqPianoRollGrid         from './seq-piano-roll-grid.vue'
import SeqNoteBox               from '../note/seq-note-box.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqPianoRollBeatDivider, SeqPianoRollGrid, SeqNoteBox },
    setup() {

        const noteCount = 1
        const noteStarts = []
        const noteDuration = 6.25

        for (let i = 0; i < noteCount; ++i) {

            noteStarts[i] = i * noteDuration + Math.random()          

        }

        return { noteCount, noteStarts, noteDuration }


    }

})

</script>

<style scoped>

    .seq-piano-roll {

        position: absolute;
        width : 100%;
        height : 100%;
        background: tomato;

    }

</style>