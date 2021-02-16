<template>
    
    <div class="seq-step">

        <seq-sub-step v-for="e in subStepCount" :key="e" :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqSubStep           from './seq-sub-step.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqSubStep },
    setup() {

        const subStepCount = 1

        return { subStepCount }

    }

})

</script>

<style scoped>

    .seq-step {

        position: absolute;
        width : 100%;
        height : 100%;
        border-radius: 5px;
        box-shadow: inset 1px 1px 2px rgb(100, 100, 100), inset -1px -1px 2px rgb(50, 50, 50);

        display: grid;
        grid-auto-flow: column;
        gap: 0.1em;
        box-sizing: border-box;
        padding: 8px;

    }

</style>