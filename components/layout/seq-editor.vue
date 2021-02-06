<template>
    
    <div class='seq-editor'>

        <seq-clip-color-indicator/>
        <seq-tracks/>
        <seq-tool-box/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqClipColorIndicator    from '../clip/seq-clip-color-indicator.vue'
import SeqTracks                from '../track/seq-tracks.vue'
import SeqToolBox               from '../tool/seq-tool-box.vue'

export default defineComponent({ components : { SeqClipColorIndicator, SeqTracks, SeqToolBox } })

</script>

<style scoped>

    .seq-editor {

        display: grid;
        grid-template-columns: 0.25fr 15fr 1fr;
        padding: 0 10px 10px 10px;

    }

</style>