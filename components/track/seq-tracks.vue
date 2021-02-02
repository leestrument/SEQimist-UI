<template>
    
    <div class='seq-tracks'>
        <seq-track v-for="e in lastSelectedClip.getVisibleTrackCount()" :key="e"/>
    </div>

</template>

<script lang="ts">

import { defineComponent, computed, onRenderTracked } from 'vue'
import { useStore } from 'vuex'
import SeqTrack from './seq-track.vue'

export default defineComponent({

    components : { SeqTrack },
    setup() {

        const store = useStore()
        const lastSelectedClip = computed(() => store.getters.lastSelectedClip)

        // onRenderTracked(() => console.log('re-render!'))

        return { lastSelectedClip }

    }

})

</script>

<style scoped>

    .seq-tracks {

        background: rgb(60, 60, 60);
        display: grid;
        grid-auto-flow: row;
        gap: 2px;
        padding: 2px;

    }

</style>