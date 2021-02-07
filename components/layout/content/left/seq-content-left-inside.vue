<template>
    
    <div class="seq-content-left-inside">

        <seq-content-left-inside-left/>
        <seq-content-left-inside-center/>
        <seq-content-left-inside-right/>

    </div>

</template>

<script lang="ts">

import { defineComponent }          from 'vue'
import SeqContentLeftInsideCenter   from './seq-content-left-inside-center.vue'
import SeqContentLeftInsideLeft     from './seq-content-left-inside-left.vue'
import SeqContentLeftInsideRight    from './seq-content-left-inside-right.vue'

export default defineComponent({ components : { SeqContentLeftInsideLeft, SeqContentLeftInsideCenter, SeqContentLeftInsideRight } })
        
</script>

<style scoped>

    .seq-content-left-inside {

        width : 100%;
        height : 100%;
        box-sizing: border-box;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 0.01fr 1fr 0.035fr;

    }

</style>