<template>
    
    <div @mousedown="mouseDownButtonAdd">
        <seq-svg-add :color="color"/>
    </div>

</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useStore }             from 'vuex'
import SeqSvgAdd                from '../svg/seq-svg-add.vue' // variable

const BUTTON_OFF_COLOR  = 'rgb(100, 100, 100)'
const BUTTON_ON_COLOR   = 'rgb(200, 200, 200)'
const BUTTON_BLINK_TIME = 100

export default defineComponent({

    components : { SeqSvgAdd },

    setup() {

        const store                 = useStore()
        const color                 = ref(BUTTON_OFF_COLOR)
        const BlinkSvg              = () => { color.value = BUTTON_ON_COLOR; setTimeout(() => { color.value = BUTTON_OFF_COLOR }, BUTTON_BLINK_TIME) }
        const mouseDownButtonAdd    = () => { store.commit('mouseDownButtonAdd'); BlinkSvg() }

        return { mouseDownButtonAdd, color }

    }

})

</script>