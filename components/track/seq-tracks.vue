<template>
    
    <div class="seq-tracks">

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
import SeqTrack             from './seq-track.vue'

export default defineComponent({

    components : { SeqTrack }

})

</script>

<style scoped>

    .seq-tracks {

        background: rgb(50, 50, 50);
        display: grid;
        grid-auto-flow: row;

    }

</style>