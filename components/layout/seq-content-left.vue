<template>
    
    <div class="seq-content-left">

        <seq-content-left-left/>
        <seq-content-left-center/>
        <seq-content-left-right/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqContentLeftCenter from './seq-content-left-center.vue'
import SeqContentLeftLeft   from './seq-content-left-left.vue'
import SeqContentLeftRight  from './seq-content-left-right.vue'

export default defineComponent({

    components : { SeqContentLeftLeft, SeqContentLeftCenter, SeqContentLeftRight }

})

</script>

<style scoped>

    .seq-content-left {

        padding: 10px;
        background: green;
        display: grid;
        grid-template-columns: 0.025fr 1fr 0.05fr;

    }

</style>