<template>
    
    <div class="seq-piano-roll-panels">

        <seq-piano-roll-panel-one/>
        <seq-piano-roll-panel-two/>
        <seq-piano-roll-panel-one/>
        <seq-piano-roll-panel-two/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqPianoRollPanelOne from './seq-piano-roll-panel-one.vue'
import SeqPianoRollPanelTwo from './seq-piano-roll-panel-two.vue'

export default defineComponent({ components : { SeqPianoRollPanelOne, SeqPianoRollPanelTwo } })

</script>

<style scoped>

    .seq-piano-roll-panels {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

</style>