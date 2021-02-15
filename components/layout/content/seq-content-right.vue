<template>
    
    <div class="seq-content-right seq-hole">

        <seq-inspector/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInspector         from '../../inspector/seq-inspector.vue'

export default defineComponent({ components : { SeqInspector } })

</script>

<style scoped>

    .seq-content-right { padding: 20px; }

</style>