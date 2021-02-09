<template>
    
    <div class="seq-step-sequencer">

        <seq-step-slot v-for="e in 7" :key="e"/>        

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqStepSlot          from './seq-step-slot.vue'

export default defineComponent({

    components : { SeqStepSlot }

})

</script>

<style scoped>

    .seq-step-sequencer {

        position: absolute;
        width : 100%;
        height : 100%;
        background: rgb(30, 30, 35);

        display: grid;
        grid-auto-flow: column;

        box-sizing: border-box;
        padding: 4px;
        gap: 4px;

    }

</style>