<template>
    
    <div class="seq-tool-box">

        <lee-button></lee-button>
        <lee-button></lee-button>
        <lee-button></lee-button>
        <lee-button></lee-button>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import LeeButton            from '../helper/lee-button.vue'
import SeqTool              from './seq-tool.vue'

export default defineComponent({

    components : { LeeButton, SeqTool }

})

</script>

<style scoped>

    .seq-tool-box {

        background: rgb(10, 10, 15);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        padding: 10px;
        display: grid;
        grid-auto-flow: rows;
        gap: 10px;

    }

</style>