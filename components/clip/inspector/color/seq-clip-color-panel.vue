<template>
    
    <div class="seq-clip-color-panel">

        <seq-clip-color-items/>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqClipColorItems from './seq-clip-color-items.vue'

export default defineComponent({

    components : {SeqClipColorItems}

})

</script>

<style scoped>

    .seq-clip-color-panel {

        background: red;

    }

</style>