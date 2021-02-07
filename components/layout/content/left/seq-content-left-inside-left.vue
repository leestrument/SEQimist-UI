<template>
    
    <div class="seq-content-left-inside-left">

        <seq-clip-color-indicator/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqClipColorIndicator    from '../../../clip/seq-clip-color-indicator.vue'

export default defineComponent({ components : { SeqClipColorIndicator } })
    
</script>

<style scoped>

    /* .seq-content-left-inside-left {

        background: red;

    } */

</style>