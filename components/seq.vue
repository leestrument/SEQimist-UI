<template>
    
    <div class="seq">

        <seq-inside/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqInside            from './layout/seq-inside.vue'

export default defineComponent({

    components : { SeqInside }

})

</script>

<style scoped>

    .seq {

        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--seq-css-background);
        box-sizing: border-box;
        padding: var(--seq-css-gap);

    }

</style>