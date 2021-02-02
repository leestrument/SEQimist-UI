<template>
    
    <div class='seq-clip' 
    
        :style              ='{ 
            
            left        : clipLeft, 
            background  : clipBackground, 
            border      : clipBorder 
        
        }' 

        @mousedown.exact    ='mouseDownClipWithoutModifier'
        @mousedown.ctrl     ='mouseDownClipWithCommand'
        @mousedown.meta     ='mouseDownClipWithCommand'
        @mousedown.shift    ='mouseDownClipWithShift'
        @dblclick.exact     ='doubleClickClip'

    ></div>

</template>

<script lang="ts">

import { defineComponent, computed, onRenderTracked } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({

    components : {},
    props : {

        index : { type : Number, required : true },

    },
    setup(props) {

        const store             = useStore()
        const clipLeft          = computed((): string => 6.25 * props.index + '%')
        const clipBackground    = computed((): string => store.getters.clipColor(props.index))
        const clipBorder        = computed((): string => store.getters.isSelectedClip(props.index) ? '4px solid rgb(210, 210, 210)' : '2px solid rgb(40, 40, 40)')
            
        const mouseDownClipWithoutModifier  = (): void => store.commit('mouseDownClipWithoutModifier', props.index)
        const mouseDownClipWithCommand      = (): void => store.commit('mouseDownClipWithCommand', props.index)
        const mouseDownClipWithShift        = (): void => store.commit('mouseDownClipWithShift', props.index)
        const doubleClickClip               = (): void => store.commit('doubleClickClip')

        // onRenderTracked(() => console.log('re-render!')) // for debug!

        return { 
            
            clipLeft, 
            clipBackground,
            clipBorder,
            mouseDownClipWithoutModifier,
            mouseDownClipWithCommand,
            mouseDownClipWithShift,
            doubleClickClip,

        }

    }

})

</script>

<style scoped>

    .seq-clip {

        position: absolute;
        top : 20%;
        height : 65%;
        width : 6.25%;
        border-radius: 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
        
        animation: scaleFromCenter 0.5s;
        transform-origin: center;
        transition: background 0.3s;

    }

    @keyframes scaleFromCenter {

        from { transform: scale(0); }
        to   { transform: scale(1); }

    }

</style>