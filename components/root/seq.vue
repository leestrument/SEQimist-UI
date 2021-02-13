<template>
    
    <div class="seq">

        <seq-header/>
        <seq-nav/>
        <seq-content/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqHeader            from '../layout/header/seq-header.vue'
import SeqNav               from '../layout/nav/seq-nav.vue'
import SeqContent           from '../layout/content/seq-content.vue'

export default defineComponent({ components : { SeqHeader, SeqNav, SeqContent } })


</script>

<style scoped>

    .seq {

        position: absolute;
        width : 100%;
        height : 100%;
        background: var(--background);
        display: grid;
        grid-template-rows: var(--row-ratio);
        box-sizing: border-box;
        padding: var(--gap);
        gap: var(--gap);

    }

</style>