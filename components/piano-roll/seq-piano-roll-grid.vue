<template>
    
    <div class="seq-piano-roll-grid">
        
        <seq-piano-roll-grid-item v-for="e in 16" :key="e"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqPianoRollGridItem from './seq-piano-roll-grid-item.vue'

export default defineComponent({

    components : { SeqPianoRollGridItem }

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