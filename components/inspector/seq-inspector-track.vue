<template>
    
    <div class="seq-inspector-track">

        <seq-inspector-track-global/>
        <seq-inspector-track-layout/>
        <seq-inspector-track-play-back/>
        <seq-inspector-track-preset/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqInspectorTrackGlobal      from './track/global/seq-inspector-track-global.vue'
import SeqInspectorTrackLayout      from './track/layout/seq-inspector-track-layout.vue'
import SeqInspectorTrackPlayBack    from './track/play-back/seq-inspector-track-play-back.vue'
import SeqInspectorTrackPreset      from './track/preset/seq-inspector-track-preset.vue'

export default defineComponent({

    components : {SeqInspectorTrackGlobal, SeqInspectorTrackLayout, SeqInspectorTrackPlayBack, SeqInspectorTrackPreset}

})

</script>

<style scoped>

    .seq-inspector-track {

        background: green;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        padding: 10px;
        gap: 10px;

    }

</style>