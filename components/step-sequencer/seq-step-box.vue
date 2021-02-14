<template>
    
    <div class="seq-step-box">

        <seq-step-slot :color="color"/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqStepSlot from './seq-step-slot.vue'

export default defineComponent({

    props : { color : { type : String, required : true } },
    components : {SeqStepSlot}

})

</script>

<style scoped>

    .seq-step-box {

        background: rgb(30, 30, 35);
        padding: 5px;

    }

</style>