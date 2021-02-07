<template>
    
    <div class="seq-content-right-inside">
        <seq-content-right-inside-top/>
        <seq-content-right-inside-bottom/>
    </div>

</template>

<script lang="ts">

import { defineComponent }          from 'vue'
import SeqContentRightInsideTop     from './seq-content-right-inside-top.vue'
import SeqContentRightInsideBottom  from './seq-content-right-inside-bottom.vue'

export default defineComponent({ components : { SeqContentRightInsideTop, SeqContentRightInsideBottom } })

</script>

<style scoped>

    .seq-content-right-inside {

        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 0.065fr 1fr;        

    }

</style>