<template>
    
    <div class="seq-timeline-scroll-box">

        <seq-timeline-loop/>
        <seq-clip 
        
            v-for="(e, i) in 20"
            :key="i"
            :index="i"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTimelineLoop      from './seq-timeline-loop.vue'
import SeqClip              from '../clip/seq-clip.vue'

export default defineComponent({

    components : { SeqTimelineLoop, SeqClip }

})

</script>

<style scoped>

    .seq-timeline-scroll-box {

        position: relative;
        width : 100%;
        height : 100%;
        overflow: overlay;

    }

    .seq-timeline-scroll-box::-webkit-scrollbar {

        width: 1vw;
        height: 10px;

    }

    .seq-timeline-scroll-box::-webkit-scrollbar-thumb {

        background-color: rgb(200, 200, 200);
        border-radius: 100px;

    }

</style>