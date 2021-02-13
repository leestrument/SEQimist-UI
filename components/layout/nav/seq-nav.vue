<template>
    
    <div class="seq-nav seq-hole">

        <seq-nav-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNavInside         from './seq-nav-inside.vue'

export default defineComponent({ components : { SeqNavInside } })

</script>