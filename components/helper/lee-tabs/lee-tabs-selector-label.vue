<template>
    
    <span class="lee-tabs-selector-label" 
    
        v-text="label"
        :style="{color : color}"
    
    ></span>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({ 
    
    props : { 
        
        label               : { type : String, required : true },
        index               : { type : Number, required : true },
        selectedTabIndex    : { type : Number, required : true }    
    
    },

    setup(props) {

        const color = computed(() => props.index === props.selectedTabIndex ? 'rgb(200, 200, 200)' : 'rgb(100, 100, 100)' )

        return { color }

    }

})

</script>