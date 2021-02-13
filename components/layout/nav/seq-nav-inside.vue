<template>
    
    <div class="seq-nav-inside seq-display">

        <seq-timeline/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTimeline          from '../../timeline/seq-timeline.vue'

export default defineComponent({ components : { SeqTimeline } })

</script>

<style scoped>

    .seq-nav-inside {

        position: relative;
        width: 100%;
        height: 100%;

    }

</style>