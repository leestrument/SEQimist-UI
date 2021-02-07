<template>
    
    <div id="seq-inspector-selectors">

        <seq-inspector-selector label="One" :is-selected="state.isSelected[0]" @mousedown="mouseDown(0)"/>
        <seq-inspector-selector label="Two"  :is-selected="state.isSelected[1]"  @mousedown="mouseDown(1)"/>
        <seq-inspector-selector label="Three"  :is-selected="state.isSelected[2]" @mousedown="mouseDown(2)"/>

    </div>

</template>

<script lang="ts">

import { defineComponent, reactive }    from 'vue'
import SeqInspectorSelector             from './seq-inspector-selector.vue'

export default defineComponent({

    components : { SeqInspectorSelector },

    setup() {

        const state = reactive({

            isSelected : [true, false, false]

        })

        const mouseDown = (index) => {

            state.isSelected[index] = true

            state.isSelected.forEach((e, i) => {

                if (i !== index) state.isSelected[i] = false

            })

        }

        return { state, mouseDown }

    }

})

</script>

<style scoped>

    #seq-inspector-selectors {

        width : 100%;
        height : 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.5fr;
        gap: 4px;

    }

</style>