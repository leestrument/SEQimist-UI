<template>
    
    <div class="seq-clip-track-count-panel">

        <seq-clip-track-count-items/>

    </div>

</template>

<script lang="ts">

import { defineComponent }          from 'vue'
import SeqClipTrackCountItems from './seq-clip-track-count-items.vue'


export default defineComponent({ components : {SeqClipTrackCountItems  } })

</script>

<style scoped>

    .seq-clip-track-count-panel {

        position: absolute;
        width: 100%;
        height: 100%;
        background: rosybrown;

        display: grid;
        grid-auto-flow: column;

    }

</style>