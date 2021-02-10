<template>
    
    <div class="seq-inspector">

        <lee-tabs :labels="['Clip', 'Track', 'Note']" :selected-tab-index="state.selectedTabIndex" />
        <div class="seq-current-inspector">

            <component :is="state.currentInspector"></component>

        </div>
            
    </div>

</template>

<script lang="ts">

import { defineComponent, reactive, computed }  from 'vue'
import LeeTabs              from '../helper/lee-tabs/lee-tabs.vue'
import SeqClipInspector     from '../clip/inspector/seq-clip-inspector.vue'
import SeqTrackInspector    from '../track/seq-track-inspector.vue'
import SeqNoteInspector     from '../note/seq-note-inspector.vue'

export default defineComponent({

    components : { LeeTabs },
    setup() {

        const inspectorItems = [ SeqClipInspector, SeqTrackInspector, SeqNoteInspector ]

        const state = reactive({

            selectedTabIndex : 0,
            currentInspector : computed(() => inspectorItems[state.selectedTabIndex])

        })

        return { state }

    }

})

</script>

<style scoped>

    .seq-inspector {

        position: absolute;
        width : 100%;
        height : 100%;
        border-radius: 10px;
        background: rgb(30, 30, 35);
        display: grid;
        grid-template-rows: 40px 1fr;

    }

    .seq-current-inspector { 
        
        padding: 6px 10px 10px 10px; 
    
    }

</style>