<template>
    
    <div class="seq-step-slot">

        <seq-step v-if="hasStep" :track-index="trackIndex"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqStep              from './seq-step.vue'

export default defineComponent({

    props       : { trackIndex : { type : Number, required : true }},
    components  : { SeqStep },
    setup() {

        const hasStep = false

        return { hasStep }

    }

})

</script>

<style scoped>

    .seq-step-slot {

        position: relative;
        width: 100%;
        height: 100%;
        background: rgb(20, 20, 20);
        border-radius: 5px;
        box-shadow: inset 1px 1px 2px black, inset -1px -1px 2px rgb(80, 80, 80);

    }

</style>