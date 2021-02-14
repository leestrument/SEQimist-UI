<template>
    
    <div class="seq-browser-pop-up"></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-browser-pop-up {

        position: absolute;
        top: 100%;
        width : 200%;
        height : 2000%;
        background: rgba(20, 20, 25, 0.6);
        backdrop-filter: blur(20px);
        z-index: 1;
        border-radius: 20px;

    }

</style>