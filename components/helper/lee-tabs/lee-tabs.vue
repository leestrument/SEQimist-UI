<template>
    
    <div class="lee-tabs">

         <lee-tabs-selector
        
            v-for="(label, index) in labels"
            :key="label"
            :label="label"
            :index="index"
            :selected-tab-index="selectedTabIndex"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import LeeTabsSelector      from './lee-tabs-selector.vue'

export default defineComponent({

    props : { 
        
        labels              : { type : Array, required : true },
        selectedTabIndex    : { type : Number, default : 0 }
    
    },
    components : { LeeTabsSelector }

})

</script>

<style scoped>

    .lee-tabs {

        display: grid;
        grid-auto-flow: column;
        padding: 4px;
        gap: 4px;

    }

</style>