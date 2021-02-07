<template>
    
    <div class="seq-content-left-inside-right">

        <seq-tool-box/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqToolBox           from '../../../tool/seq-tool-box.vue'

export default defineComponent({ components : { SeqToolBox } })

</script>

<style scoped>

    .seq-content-left-inside-right {

        padding: 10px;
        background: rgb(35, 35, 40);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

    }

</style>