<template>
    
    <div class='seq-notes'>

        <!-- <seq-note :style="{ left : '20%', width : '3%' }"/>
        <seq-note :style="{ left : '40%', width : '3%' }"/>
        <seq-note :style="{ left : '60%', width : '3%' }"/>
        <seq-note :style="{ left : '80%', width : '3%' }"/> -->

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqNote from './seq-note.vue'

export default defineComponent({

    components : { SeqNote }

})

</script>

<style scoped>

    .seq-notes {

        position: absolute;
        width : 100%;
        height : 100%;

    }

</style>