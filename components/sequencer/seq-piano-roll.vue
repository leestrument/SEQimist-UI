<template>
    
    <div class='seq-piano-roll'>

        <seq-piano-roll-panel />
        <seq-piano-roll-grid :track-index="trackIndex"/>

        <!-- prototype -->
        <div 
            
            class="note"
            v-for="note in notes"
            :key="note.getStart()"
            :style="{

                left : note.getStart() * 100 + '%'

            }"
            
        >

            <div v-for="i in 10" :key="i"></div>
     




        </div>
        <!-- <seq-notes/> -->

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqPianoRollPanel                from './seq-piano-roll-panel.vue'
import SeqPianoRollGrid                 from './seq-piano-roll-grid.vue'
import SeqNotes                         from '../note/seq-notes.vue'

export default defineComponent({

    components : { SeqPianoRollPanel, SeqPianoRollGrid, SeqNotes },
    props : { trackIndex : { type : Number, required : true }},
    setup(props) {

        const store = useStore()
        const notes = computed(() => store.getters.getPianoRollNotes(props.trackIndex))

        return { notes }


    }

})

</script>

<style scoped>

    .seq-piano-roll {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

    /* prototype */

    .note {

        position: absolute;
        width: 6.25%;
        height: 100%;
        z-index: 1;
        background: red;


    }

</style>