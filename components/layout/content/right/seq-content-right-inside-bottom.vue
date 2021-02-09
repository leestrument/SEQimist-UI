<template>
    
    <div class="seq-content-right-inside-bottom">

        <seq-inspector/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInspector         from '../../../inspector/seq-inspector.vue'

export default defineComponent({

    components : { SeqInspector }

})

</script>

<style scoped>

    .seq-content-right-inside-bottom {

        background: rgb(60, 60, 65);
        border-radius: 10px;
        box-sizing: border-box;
        border: 2px solid rgb(100, 100, 100);
        padding: 10px;

    }

</style>