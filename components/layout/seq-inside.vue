<template>
    
    <div class="seq-inside">

        <seq-header/>
        <seq-nav/>
        <seq-content/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqHeader            from './header/seq-header.vue'
import SeqNav               from './nav/seq-nav.vue'
import SeqContent           from './content/seq-content.vue'

export default defineComponent({ components : {SeqHeader, SeqNav, SeqContent } })

</script>

<style scoped>

    .seq-inside {

        position: relative;
        width : 100%;
        height : 100%;
        display: grid;
        grid-template-rows: var(--seq-css-row-ratio);
        gap: var(--seq-css-gap);

    }

</style>