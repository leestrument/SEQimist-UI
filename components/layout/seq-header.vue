<template>
    
    <div class='seq-header'>

        <seq-global/>
        <seq-timeline/>
        
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SeqGlobal        from '../global/seq-global.vue'
import SeqTimeline      from '../timeline/seq-timeline.vue'

export default defineComponent({

    components : { SeqGlobal, SeqTimeline }

})

</script>

<style scoped>

    .seq-header {

        width : 100%;
        height : 100%;
        background: rgb(45, 45, 50);
        display: grid;
        grid-template-rows: 1fr 3fr;

    }

</style>