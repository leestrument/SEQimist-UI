<template>
    
    <div class="seq-step">

        <seq-sub-step v-for="e in subStepCount" :key="e" :color="color"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqSubStep           from './seq-sub-step.vue'

export default defineComponent({

    props : { color : { type : String, required : true } },
    components : { SeqSubStep },
    setup() {

        const subStepCount = Math.floor(Math.random() * 8) + 1

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
        box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 2px black;

        display: grid;
        grid-auto-flow: column;
        gap: 0.1em;
        box-sizing: border-box;
        padding: 8px;

    }

</style>