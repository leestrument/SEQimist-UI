<template>
    
    <div class='seq-inspector-clip'>

        <seq-inspector-clip-color/>
        <seq-inspector-clip-track-count/>
        <div :style="{background : 'green'}"></div>
        <div :style="{background : 'yellow'}"></div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqInspectorClipColor from './seq-inspector-clip-color.vue'
import SeqInspectorClipTrackCount from './seq-inspector-clip-track-count.vue'

export default defineComponent({

    components : { SeqInspectorClipColor, SeqInspectorClipTrackCount }

})

</script>

<style scoped>

    .seq-inspector-clip {

        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(20, 20, 20);

        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        box-sizing: border-box;
        padding : 10px;
        gap: 10px;

    }

</style>