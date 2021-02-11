<template>
    
    <div class="seq-content-left seq-css-pressed-panel">

        <seq-content-left-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqContentLeftInside from './seq-content-left-inside.vue'

export default defineComponent({

    components : {SeqContentLeftInside}

})

</script>

<style scoped>

    .seq-content-left {

        position: relative;
        padding: var(--seq-css-content-left-padding);

    }

</style>