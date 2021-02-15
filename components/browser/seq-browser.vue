<template>
    
    <div class="seq-browser child-is-center" @mousedown="mouseDown">

        <span>Preset 01 - Beatiful Chords</span>
        <seq-browser-pop-up v-if="isOpen"/>

    </div>

</template>

<script lang="ts">

import { defineComponent, ref }  from 'vue'
import SeqBrowserPopUp      from './seq-browser-pop-up.vue'

export default defineComponent({

    components : { SeqBrowserPopUp },
    setup() {

        const isOpen = ref(false)
        const mouseDown = (): void => {

            isOpen.value = !isOpen.value

        }


        return { isOpen, mouseDown }

    }

})

</script>

<style scoped>

   .seq-browser {

        position: relative;
        height: 100%;

   }

   span { color : rgb(160, 160, 160)}
   
</style>