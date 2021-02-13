<template>
    
    <div class="seq-editor">

        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>
        <seq-track/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTrack             from '../track/seq-track.vue'

export default defineComponent({ components : { SeqTrack } })

</script>

<style scoped>

    .seq-editor {

        background: rgb(15, 15, 15);
        /* box-shadow: inset 2px 2px 4px black, inset -2px -2px 4px rgb(63, 63, 63); */

        display: grid;
        grid-auto-flow: rows;
        gap: 4px;

    }

</style>