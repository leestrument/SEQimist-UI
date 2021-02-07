<template>
    
    <div class="seq-track-header">

        <span>C1</span>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { index : { type : Number, required : true } },
    components : {}

})

</script>

<style scoped>

    .seq-track-header {

        background: palevioletred;
        display: flex;
        justify-content: center;
        align-items: center;

    }

</style>