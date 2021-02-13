<template>
    
    <div class="seq-step-sequencer">

        <seq-step-box v-for="e in stepCount" :key="e"/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqStepBox from './seq-step-box.vue'

export default defineComponent({

    components : { SeqStepBox },
    setup() {

        const stepCount = Math.floor(Math.random() * 16) + 1

        return { stepCount }

    }

})

</script>

<style scoped>

    .seq-step-sequencer {

        position: absolute;
        width : 100%;
        height : 100%;

        display: grid;
        grid-auto-flow: column;

    }

</style>