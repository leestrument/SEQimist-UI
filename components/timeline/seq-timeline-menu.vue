<template>
    
    <div class="seq-timeline-menu">

        <!-- Add clip -->
        <lee-button id="add-clip">
            
            <svg-plus/>
        
        </lee-button>

        <!-- Remove clip -->
        <lee-button id="remove-clip">
            
            <svg-trash-can/>
    
        </lee-button>

        <!-- Duplicate clip -->
        <lee-button>
            
            <svg-duplicate/>
        
        </lee-button>

        <!-- Shuffle clip. -->
        <lee-button>
            
            <svg-dice/>
        
        </lee-button>

        <!-- Export Clip. -->
        <lee-button>
            
            <svg-share/>
        
        </lee-button>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import LeeButton            from '../helper/lee-button.vue'
import SvgPlus              from '../svg/svg-plus.vue'
import SvgTrashCan          from '../svg/svg-trash-can.vue'
import SvgDuplicate         from '../svg/svg-duplicate.vue'
import SvgDice              from '../svg/svg-dice.vue'
import SvgShare             from '../svg/svg-share.vue'

export default defineComponent({

    components : { 
        
        LeeButton, 
        SvgPlus,
        SvgTrashCan,
        SvgDuplicate,
        SvgDice,
        SvgShare,
    
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