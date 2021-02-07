<template>
    
    <div class="seq-nav">

        <seq-nav-top/>
        <seq-nav-bottom/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqNavTop            from './top/seq-nav-top.vue'
import SeqNavBottom         from './bottom/seq-nav-bottom.vue'


export default defineComponent({

    components : { SeqNavTop, SeqNavBottom }

})

</script>

<style scoped>

    .seq-nav { 
        
        background: rgb(35, 35, 40);
        display: grid;
        grid-template-rows: 0.31fr 1fr;
    
    }

</style>