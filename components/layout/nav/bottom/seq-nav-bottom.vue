<template>
    
    <div class="seq-nav-bottom">

        <seq-nav-bottom-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNavBottomInside   from './seq-nav-bottom-inside.vue'

export default defineComponent( { components : { SeqNavBottomInside } } )

</script>

<style scoped>

    .seq-nav-bottom { padding: 5px 10px 10px 10px; }

</style>