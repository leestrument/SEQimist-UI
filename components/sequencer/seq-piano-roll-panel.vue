<template>

    <div class='seq-piano-roll-panel'>

        <div class='seq-piano-roll-panel-1'></div>
        <div class='seq-piano-roll-panel-2'></div>
        <div class='seq-piano-roll-panel-1'></div>
        <div class='seq-piano-roll-panel-2'></div>

    </div>
    
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {}

})

</script>

<style scoped>

    .seq-piano-roll-panel {

        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        grid-auto-flow: column;

    }

    .seq-piano-roll-panel-1 {

        background: rgb(40, 40, 45);

    }
    .seq-piano-roll-panel-2 {

        background: rgb(50, 50, 55);

    }

</style>