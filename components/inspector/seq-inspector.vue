<template>
    
    <div class='seq-inspector'>

        <seq-inspector-selector v-on:inspector-selector="messageFromSelector"/>
        <div class='seq-inspector-panel'>

            <seq-inspector-clip v-show="selectedTab === 0"/>
            <seq-inspector-track v-show="selectedTab === 1"/>
            <seq-inspector-note v-show="selectedTab === 2"/>

        </div>
        
    </div>

</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import SeqInspectorSelector     from './seq-inspector-selector.vue'
import SeqInspectorClip         from './seq-inspector-clip.vue'
import SeqInspectorTrack        from './seq-inspector-track.vue'
import SeqInspectorNote         from './seq-inspector-note.vue'


export default defineComponent({

    components : { SeqInspectorSelector, SeqInspectorClip, SeqInspectorTrack, SeqInspectorNote },
    setup() {

        const selectedTab = ref(0)
        const messageFromSelector = (index: number) => {

            selectedTab.value = index

        }

        return { selectedTab, messageFromSelector }

    }

})

</script>

<style scoped>

    .seq-inspector {

        margin: 10px 10px 10px 0;
        display: grid;
        grid-template-rows: 1fr 15fr;
        gap: 5px;

    }

    .seq-inspector-panel {

        position: relative;

    }

</style>