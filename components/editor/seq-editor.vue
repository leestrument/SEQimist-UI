<template>
    
    <div class='seq-editor'>
        <seq-editor-header/>
        <seq-tracks/>
        <seq-toolbar/>
        <seq-editor-hider/>
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqEditorHeader from './seq-editor-header.vue'
import SeqTracks from '../track/seq-tracks.vue'
import SeqToolbar from '../toolbar/seq-toolbar.vue'
import SeqEditorHider from './seq-editor-hider.vue'

export default defineComponent({

    components : { SeqEditorHeader, SeqTracks, SeqToolbar, SeqEditorHider, }

})

</script>

<style scoped>

    .seq-editor {

        position: relative;
        margin: 10px;
        display: grid;
        grid-template-columns: 0.25fr 15fr 1fr;

    }

</style>