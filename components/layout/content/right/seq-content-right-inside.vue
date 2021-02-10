<template>
    
    <div class="seq-content-right-inside">

        <seq-inspector/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInspector from '../../../inspector/seq-inspector.vue'

export default defineComponent({ components : { SeqInspector } })

</script>

<style scoped>

    .seq-content-right-inside {

        position: relative;
        width: 100%;
        height: 100%;
    
    }

</style>