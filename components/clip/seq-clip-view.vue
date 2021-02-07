<template>
    
    <div class="seq-clip-view">

        <seq-track 
        
            v-for="e in 32" 
            :key="e"
            :index="32 - e"

        />

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqTrack             from '../track/seq-track.vue'

export default defineComponent({

    components : { SeqTrack }

})

</script>

<style scoped>

    .seq-clip-view {

        position: relative;
        width : 100%;
        height : 100%;
        background: rgb(30, 30, 35);

        overflow-y: auto;
        /* transform: rotateY(180deg); */

    }

    .seq-clip-view::-webkit-scrollbar {

        width: 10px;

    }

    .seq-clip-view::-webkit-scrollbar-thumb {

        background-color: rgb(200, 200, 200);
        border-radius: 100px;

    }

</style>