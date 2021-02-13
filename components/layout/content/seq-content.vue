<template>
    
    <div class="seq-content">

        <seq-content-left/>
        <seq-content-right/>
        
    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqContentLeft       from './seq-content-left.vue'
import SeqContentRight      from './seq-content-right.vue'

export default defineComponent({ components : { SeqContentLeft, SeqContentRight } })

</script>

<style scoped>

    .seq-content {

        display: grid;
        grid-template-columns: var(--column-ratio);
        gap: var(--gap);

    }

</style>