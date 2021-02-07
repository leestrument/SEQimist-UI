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

    }

</style>