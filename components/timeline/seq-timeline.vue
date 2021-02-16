<template>
    
    <div class="seq-timeline">

        <seq-timeline-loop/>
        <seq-clip 
        
            v-for           ="(clip, i) in clips" 
            :key            ="i" 
            :clip-index     ="i"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import { useStore }         from 'vuex'
import SeqTimelineLoop      from './seq-timeline-loop.vue'
import SeqClip              from '../clip/seq-clip.vue'

export default defineComponent({

    components : { SeqClip, SeqTimelineLoop },
    setup() {

        const store = useStore()
        const clips = store.getters.getClips

        return { clips }

    }

})

</script>

<style scoped>

    .seq-timeline {

        position: relative;
        width : 100%;
        height : 100%;
        overflow: overlay;

    }

    .seq-timeline::-webkit-scrollbar {

        width: 1vw;
        height: 8px;

    }

    .seq-timeline::-webkit-scrollbar-thumb {

        background-color: rgb(150, 150, 150);
        border-radius: 100px;

    }

</style>