<template>
    
    <div class="seq-header-right"></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-header-right {

        position: absolute;
        right: 0;
        width : var(--seq-css-header-timeline-menu-width);
        height : 100%;
        background: var(--seq-css-header-background);

    }

</style>