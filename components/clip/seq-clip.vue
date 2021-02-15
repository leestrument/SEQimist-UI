<template>
    
    <div 
    
        class       ="seq-clip"
        :style      ="{ left : clipStart, background : color }"
        :class      ="clipClassName"
        :id         ="clipId"
    
    ></div>

</template>

<script lang="ts">

import { defineComponent, computed, onRenderTracked }   from 'vue'

export default defineComponent({

    props : { 
        
        index       : { type : Number,  required : true },
        color       : { type : String,  required : true },
        isSelected  : { type : Boolean, required : true },
    
    },

    setup(props) {

        const clipStart     = computed(() => props.index * 6.25 + '%')
        const clipClassName = computed(() => props.isSelected ? 'selected' : 'deselected')
        const clipId        = computed(() => 'clip-id-' + props.index)

        // onRenderTracked(() => console.log('rendered!'))

        return { clipStart,  clipClassName, clipId }

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