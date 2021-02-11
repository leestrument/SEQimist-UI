<template>
    
    <div class="seq-header-left"></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-header-left {

        position: absolute;
        left: 0;
        width : var(--seq-css-header-logo-width);
        height : 100%;
        background: var(--seq-css-header-background);

    }

</style>