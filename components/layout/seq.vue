<template>
    
    <div class='seq'>

        <seq-header/>
        <seq-main/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqHeader            from './seq-header.vue'
import SeqMain              from './seq-main.vue'

export default defineComponent({ components : { SeqHeader, SeqMain } })

</script>

<style scoped>

    .seq {

        width: 100%;
        height: 100%;
        background: rgb(100, 100, 100);
        display: grid;
        grid-template-rows: 1fr 4fr;
        gap : 1px;

    }

</style>