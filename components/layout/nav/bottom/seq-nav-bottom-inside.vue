<template>
    
    <div class="seq-nav-bottom-inside">

        <seq-timeline/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTimeline          from '../../../timeline/seq-timeline.vue'

export default defineComponent({ components : { SeqTimeline } })
 
</script>

<style scoped>

    .seq-nav-bottom-inside {

        position: relative;
        width : 100%;
        height : 100%;
        background: rgb(70, 70, 75);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px 10px 10px 10px;

    }

</style>