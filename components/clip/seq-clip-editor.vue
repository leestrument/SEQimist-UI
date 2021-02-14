<template>
    
    <div class="seq-editor">

        <seq-track v-for="e in trackCount" :key="e"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTrack             from '../track/seq-track.vue'

export default defineComponent({ 
    
    components : { SeqTrack },
    setup() {

        const trackCount = 8

        return { trackCount }

    } 

})

</script>

<style scoped>

    .seq-editor {

        background: rgb(15, 15, 15);
        /* box-shadow: inset 2px 2px 4px black, inset -2px -2px 4px rgb(63, 63, 63); */

        display: grid;
        grid-auto-flow: rows;
        gap: 1px;

    }

</style>