<template>
    
    <div class="seq-inspector-note">

        <seq-inspector-note-division/>
        <seq-inspector-note-velocity-curve/>

    </div>

</template>

<script lang="ts">

import { defineComponent }              from 'vue'
import SeqInspectorNoteDivision         from './note/division/seq-inspector-note-division.vue'
import SeqInspectorNoteVelocityCurve    from './note/velocity-curve/seq-inspector-note-velocity-curve.vue'

export default defineComponent({

    components : { SeqInspectorNoteDivision, SeqInspectorNoteVelocityCurve }

})

</script>

<style scoped>

    .seq-inspector-note {

        background: blue;
        display: grid;
        grid-template-rows: 1fr 1fr;
        padding: 10px;
        gap: 10px;

    }

</style>