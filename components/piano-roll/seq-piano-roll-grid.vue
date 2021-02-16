<template>
    
    <div class="seq-piano-roll-grid">
        
        <seq-piano-roll-grid-item v-for="e in gridCount" :key="e"/>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }    from 'vue'
import { useStore }                     from 'vuex'
import SeqPianoRollGridItem             from './seq-piano-roll-grid-item.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqPianoRollGridItem },
    setup(props) {

        const store     = useStore()
        const gridCount = computed(() => store.getters.getGridCount(props.trackIndex))

        return { gridCount }

    } 

})

</script>

<style scoped>

    .seq-piano-roll-grid {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

</style>