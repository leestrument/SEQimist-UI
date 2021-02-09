<template>
    
    <div class="seq-inspector">

        <seq-inspector-clip     v-if="inspectorType === 0"/>
        <seq-inspector-track    v-else-if="inspectorType === 1"/>
        <seq-inspector-note     v-else-if="inspectorType === 2"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInspectorClip     from './seq-inspector-clip.vue'
import SeqInspectorNote     from './seq-inspector-note.vue'
import SeqInspectorTrack    from './seq-inspector-track.vue'

enum InspectorType {

    Clip,
    Track,
    Note

}

export default defineComponent({

    components : { SeqInspectorClip, SeqInspectorNote, SeqInspectorTrack },
    setup() {

        const inspectorType = InspectorType.Clip 

        return { inspectorType }

    }

})

</script>

<style scoped>

    .seq-inspector {

        position: relative;
        width : 100%;
        height : 100%;
        background: rgb(20, 20, 25);

    }

</style>