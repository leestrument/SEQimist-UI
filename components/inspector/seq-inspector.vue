<template>
    
    <div class="seq-inspector">

        <seq-clip-inspector     v-if        ="inspectorType === 0"/>
        <seq-track-inspector    v-else-if   ="inspectorType === 1"/>
        <seq-note-inspector     v-else-if   ="inspectorType === 2"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqClipInspector     from '../clip/seq-clip-inspector.vue'
import SeqTrackInspector    from '../track/seq-track-inspector.vue'
import SeqNoteInspector     from '../note/seq-note-inspector.vue'

enum InspectorType {

    Clip,
    Track,
    Note

}

export default defineComponent({

    components : { SeqClipInspector, SeqTrackInspector, SeqNoteInspector },
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

    }

</style>