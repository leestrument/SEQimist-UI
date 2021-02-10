<template>
    
    <div 
    
        class="lee-tabs-selector" 
        :class="isSelected ? 'lee-selected-tab' : 'lee-unselected-tab' "
    
    >

        <lee-tabs-selector-label 
        
            :label="label"
            :index="index"
            :selected-tab-index="selectedTabIndex"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent, computed }  from 'vue'
import LeeTabsSelectorLabel from './lee-tabs-selector-label.vue'

export default defineComponent({

    props : { 
        
        label               : { type : String, required : true },
        index               : { type : Number, required : true },
        selectedTabIndex    : { type : Number, required : true }    
    
    },

    components : { LeeTabsSelectorLabel },

    setup(props) {

        const isSelected = computed(() => props.index === props.selectedTabIndex )

        return { isSelected }

    }

})

</script>

<style scoped>

    .lee-tabs-selector {

        display: grid;
        justify-content: center;
        align-items: center;

    }
    
    .lee-selected-tab {

        border-bottom : 2px solid rgb(150, 150, 150);

    }

    .lee-unselected-tab {

        border-bottom : 1px solid rgb(50, 50, 50);

    }
    
</style>