<template>
    
    <div class="seq-content-left">

        <seq-content-left-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqContentLeftInside from './seq-content-left-inside.vue'

export default defineComponent({ components : { SeqContentLeftInside } })

</script>

<style scoped>

    .seq-content-left {

        background: rgb(40, 40, 45);
        padding: 10px;

    }

</style>