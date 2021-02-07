<template>
    
    <div class="seq-content-right-inside-top">

        <seq-inspector-selectors/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInspectorSelectors from '../../../inspector/seq-inspector-selectors.vue'

export default defineComponent({ components : { SeqInspectorSelectors } })

</script>

<style scoped>

    /* .seq-content-right-inside-top { padding-bottom: 4px; } */

</style>