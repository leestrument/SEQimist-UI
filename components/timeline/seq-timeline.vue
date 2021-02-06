<template>
    
    <div class='seq-timeline'>

        <seq-timeline-scroll-box/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTimelineScrollBox from '../timeline/seq-timeline-scroll-box.vue'

export default defineComponent({ components : { SeqTimelineScrollBox } })

</script>

<style scoped>

    .seq-timeline {

        position: relative;
        margin: 0 10px 10px 10px;
        padding: 20px;
        border-radius: 10px;
        background: rgb(80, 80, 90);
        border-bottom: 1px solid gray;

    }

</style>