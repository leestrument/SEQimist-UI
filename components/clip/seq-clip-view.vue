<template>
    
    <div class="seq-clip-view">

        <seq-clip-color-indicator/>
        <seq-clip-editor/>
        <seq-tool-box/>

    </div>

</template>

<script lang="ts">

import { defineComponent }      from 'vue'
import SeqClipColorIndicator    from './seq-clip-color-indicator.vue'
import SeqClipEditor            from './seq-clip-editor.vue'
import SeqToolBox               from '../tool/seq-tool-box.vue'

export default defineComponent({ components : { SeqClipColorIndicator, SeqClipEditor, SeqToolBox } })

</script>

<style scoped >

    .seq-clip-view {

        position: relative;
        width : 100%;
        height : 100%;
        display: grid;
        grid-template-columns: var(--clip-view-column-ratio);
        gap: 1px;

        border-radius: 20px;
        box-shadow: -1px -1px 2px rgb(100, 100, 100), 2px 2px 4px rgb(10, 10, 10);

    }

</style>