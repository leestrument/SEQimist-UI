<template>
    
    <div class="seq-header">

        <seq-header-left/>
        <seq-header-center/>
        <seq-header-right/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqHeaderLeft        from './seq-header-left.vue'
import SeqHeaderCenter      from './seq-header-center.vue'
import SeqHeaderRight       from './seq-header-right.vue'

export default defineComponent({ components : { SeqHeaderLeft, SeqHeaderCenter, SeqHeaderRight } })

</script>

<style scoped>

    .seq-header { 
        
        position: relative; 

        /* make center for 'seq-header-center' class only, others are absolute */
        display: flex;
        justify-content: center;
        align-items: center;
    
    }

</style>