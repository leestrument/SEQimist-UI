<template>
    
    <div class="seq-track-solo">

        <span>S</span>

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

    .seq-track-solo {

        background: blue;
        display: flex;
        justify-content: center;
        align-items: center;

    }

</style>