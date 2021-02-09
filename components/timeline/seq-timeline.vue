<template>
    
    <div class="seq-timeline">

        <seq-timeline-loop/>
        <seq-clip v-for="(e, i) in 64" :key="i" :index="i"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTimelineLoop      from './seq-timeline-loop.vue'
import SeqClip              from '../clip/seq-clip.vue'

export default defineComponent({ components : { SeqTimelineLoop, SeqClip } })

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

        background-color: rgb(200, 200, 200);
        border-radius: 100px;

    }

</style>