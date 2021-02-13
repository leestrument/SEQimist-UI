<template>
    
    <div class="seq-content-left seq-hole">

        <seq-content-left-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqContentLeftInside from './seq-content-left-inside.vue'

export default defineComponent({ components : { SeqContentLeftInside } })

</script>