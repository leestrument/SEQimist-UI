<template>
    
    <div class="seq-inspector">

        <seq-inspector-tabs     :selected-tab-index     ="selectedTabIndex"       />
        <seq-inspector-clip     v-if                    ="selectedTabIndex === 0" />
        <seq-inspector-track    v-else-if               ="selectedTabIndex === 1" />
        <seq-inspector-note     v-else                                            />

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInspectorTabs     from './seq-inspector-tabs.vue'
import SeqInspectorClip     from './seq-inspector-clip.vue'
import SeqInspectorNote     from './seq-inspector-note.vue'
import SeqInspectorTrack    from './seq-inspector-track.vue'

export default defineComponent({

    components : { SeqInspectorTabs, SeqInspectorTrack, SeqInspectorClip, SeqInspectorNote },
    setup() {

        const selectedTabIndex = 2

        return { selectedTabIndex }

    }

})
        
</script>

<style scoped>

    .seq-inspector {

        position: relative;
        width : 100%;
        height : 100%;
        display: grid;
        grid-template-rows: 50px 1fr;

    }

</style>