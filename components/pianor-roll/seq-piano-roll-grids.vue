<template>
    
    <div class="seq-piano-roll-grids">

        <seq-piano-roll-grid v-for="e in 8" :key="e"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqPianoRollGrid     from './seq-piano-roll-grid.vue'

export default defineComponent({ components : { SeqPianoRollGrid } })

</script>

<style scoped>

    .seq-piano-roll-grids {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

</style>