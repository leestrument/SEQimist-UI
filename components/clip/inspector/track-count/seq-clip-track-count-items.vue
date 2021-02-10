<template>
    
    <div class="seq-clip-track-count-items">

        <seq-clip-track-count-item label="4"/>
        <seq-clip-track-count-item label="8"/>
        <seq-clip-track-count-item label="16"/>
        <seq-clip-track-count-item label="32"/>
        <seq-clip-track-count-item label="48"/>
        <seq-clip-track-count-item label="64"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqClipTrackCountItem    from './seq-clip-track-count-item.vue'

export default defineComponent({

    components : {SeqClipTrackCountItem}

})

</script>

<style scoped>

    .seq-clip-track-count-items {

        position: relative;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;
        background: rgb(100, 100, 100);
        box-sizing: border-box;
        padding: 2px;
        gap: 2px;

    }

</style>