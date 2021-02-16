<template>
    
    <div class="seq-timeline-menu">

        <lee-button id="add-clip">           <svg-plus/>         </lee-button>
        <lee-button id="remove-clip">        <svg-trash-can/>    </lee-button>
        <lee-button id="duplicate-clip">     <svg-duplicate/>    </lee-button>
        <lee-button id="shuffle-clip">       <svg-dice/>         </lee-button>
        <lee-button id="export-clip">        <svg-share/>        </lee-button>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import { useStore }         from 'vuex'
import LeeButton            from '../helper/lee-button.vue'
import SvgPlus              from '../svg/svg-plus.vue'
import SvgTrashCan          from '../svg/svg-trash-can.vue'
import SvgDuplicate         from '../svg/svg-duplicate.vue'
import SvgDice              from '../svg/svg-dice.vue'
import SvgShare             from '../svg/svg-share.vue'

export default defineComponent({

    components : { LeeButton, SvgPlus, SvgTrashCan, SvgDuplicate, SvgDice, SvgShare },
    setup() {

        const store = useStore()
        const addClip = (): void => store.commit('addClip')

        return { addClip }

    }

})

</script>

<style scoped>

    .seq-timeline-menu {

        display: grid;
        grid-auto-flow: column;
        gap: 10px;

    }

</style>