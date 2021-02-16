<template>
    
    <div 
    
        class       ="seq-clip"
        :style      ="{ left : clipStart, background : clipColor }"
        :class      ="clipClassName"
        :id         ="clipId"
    
    ></div>

</template>

<script lang="ts">

import { defineComponent, computed, onRenderTracked } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({

    props : { clipIndex : { type : Number,  required : true } },
         
    setup(props) {
        
        const store         = useStore()
        const clipStart     = computed(() => props.clipIndex * 6.25 + '%')
        const clipColor     = computed(() => store.getters.getClipColor(props.clipIndex))
        const clipClassName = computed(() => store.getters.isSelectedClip(props.clipIndex) ? 'selected' : 'deselected')
        const clipId        = computed(() => 'clip-id-' + props.clipIndex)

        // onRenderTracked(() => console.log('render!'))

        return { clipStart,  clipColor, clipClassName, clipId }

    }

})

</script>

<style scoped>

    .seq-clip {

        position: absolute;
        top: 30px;
        width : 6.25%;
        height : 65px;
        background: rgb(67, 82, 162);
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid rgb(20, 20, 20);
        /* box-shadow: inset 1px 1px 2px rgb(150, 150, 150), inset -1px -1px 1px black; */

    }

    .seq-clip.selected      { border: 4px solid rgb(150, 150, 150);}
    .seq-clip.deselected    { border: 1px solid rgb(20, 20, 20);}

</style>