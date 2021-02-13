<template>
    
    <div class="seq-timeline-loop"></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-timeline-loop {

        position: absolute;
        width : 100px;
        height : 20px;
        box-sizing: border-box;
        border: 2px solid gray;
        background: rgb(20, 20, 25);

    }

</style>