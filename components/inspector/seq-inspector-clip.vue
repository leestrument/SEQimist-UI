<template>
    
    <div class="seq-inspector-clip">

        <seq-inspector-clip-color/>
        <seq-inspector-clip-track-count/>
        <seq-inspector-clip-interval/>
        <seq-inspector-clip-preset/>

    </div>

</template>

<script lang="ts">

import { defineComponent }          from 'vue'
import SeqInspectorClipColor        from './clip/color/seq-inspector-clip-color.vue'
import SeqInspectorClipTrackCount   from './clip/track-count/seq-inspector-clip-track-count.vue'
import SeqInspectorClipInterval     from './clip/interval/seq-inspector-clip-interval.vue'
import SeqInspectorClipPreset       from './clip/preset/seq-inspector-clip-preset.vue'

export default defineComponent({ components : { SeqInspectorClipColor, SeqInspectorClipTrackCount, SeqInspectorClipInterval, SeqInspectorClipPreset } })

</script>

<style scoped>

    .seq-inspector-clip {

        background: red;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        padding: 10px;
        gap: 10px;

    }

</style>