<template>
    
    <div class="seq-content-right">

        <seq-content-right-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqContentRightInside    from './seq-content-right-inside.vue'

export default defineComponent({ components : { SeqContentRightInside } })

</script>

<style scoped>

    .seq-content-right {

        background: rgb(40, 40, 45);
        padding: 10px;

    }

</style>