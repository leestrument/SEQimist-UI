<template>
    
    <div class="seq-browser child-is-center">

        <span>Preset 01 - Beatiful Chords</span>
        <seq-browser-pop-up v-if="false"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqBrowserPopUp      from './seq-browser-pop-up.vue'

export default defineComponent({

    components : { SeqBrowserPopUp }

})

</script>

<style scoped>

   .seq-browser {

        position: relative;
        height: 100%;

   }

   span { color : rgb(160, 160, 160)}
   
</style>