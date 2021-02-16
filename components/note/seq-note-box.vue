<template>
    
    <div class="seq-note-box">

        <seq-note :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNote              from './seq-note.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqNote }

})

</script>

<style scoped>

    .seq-note-box {

        position: absolute;
        height : 100%;

        box-sizing: border-box;
        /* border-radius: 10px; */
        border: 1px solid rgb(10, 10, 10);
        padding: 0px;

    }

</style>