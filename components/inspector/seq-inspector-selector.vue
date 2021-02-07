// This component MUST be refactored.
// Please refer this link : https://css-tricks.com/tabs-with-round-out-borders/ to get idea.

<template>
    
   <div class="seq-inspector-selector" :class="className">
            
        <span v-text="label"></span>
        <div v-if="isSelected && label !== 'Clip'" class="seq-inspector-connector">

            <div class="seq-inspector-top-border-hider"></div>
            <div class="seq-inspector-selector-border seq-inspector-selector-border-left"></div>
            <div class="seq-inspector-selector-border seq-inspector-selector-border-right"></div>

        </div>
        
        <div v-if="isSelected && label === 'Clip'" class="seq-inspector-connector">

            <div class="seq-inspector-top-border-hider-for-one"></div>
            <div class="seq-inspector-selector-border seq-inspector-selector-border-right"></div>

        </div>

    </div>

</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({ 
    
    props : { 
        
        label       : { type : String, required : true },
        isSelected  : { type : Boolean, default : false },
    
    },

    setup(props) {

        const className = computed(() => props.isSelected ? 'seq-inspector-selector-on' : 'seq-inspector-selector-off' )

        return { className }

    }

})

</script>

<style scoped>

    .seq-inspector-selector {

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .seq-inspector-selector-off { 
        
        background: rgb(30, 30, 35);
        border-radius: 10px;
        margin-bottom: 4px;
        z-index: 1;
    
    }

    .seq-inspector-selector > span {

        pointer-events: none;

    }

    .seq-inspector-selector-off > span  { color: rgb(80, 80, 80);}

    .seq-inspector-selector-on { 
        
        background: rgb(60, 60, 65);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-sizing: border-box;
        border: 2px solid rgb(100, 100, 100);
        border-bottom: none;
    
    }
    .seq-inspector-selector-on > span   { color: rgb(200, 200, 200); }

    .seq-inspector-connector {

        position: absolute;
        width: 100%;
        height: 100%;

    }

    .seq-inspector-top-border-hider {

        position: absolute;
        top: calc(100% - 10px);
        left: -10px;
        width: calc(100% + 20px);
        height: 12px;
        background: rgb(60, 60, 65);

    }

    .seq-inspector-top-border-hider-for-one {

        position: absolute;
        top: calc(100% - 10px);
        left: -2px;
        width: calc(100% + 10px);
        height: 18px;
        background: rgb(60, 60, 65);
        box-sizing: border-box;
        border-left: 2px solid rgb(100, 100, 100);      

    }

    .seq-inspector-selector-border {

        position: absolute;
        top: calc(50% + 2px);
        width: 12px;
        height: 50%;
        background: rgb(40, 40, 45);
        box-sizing: border-box;
        
    }

    .seq-inspector-selector-border-left {

        right: 100%;
        border-bottom: 2px solid rgb(100, 100, 100);
        border-right: 2px solid rgb(100, 100, 100);
        border-bottom-right-radius: 10px;

    }

    .seq-inspector-selector-border-right {

        left: 100%;
        border-bottom: 2px solid rgb(100, 100, 100);
        border-bottom-left-radius: 10px;
        border-left: 2px solid rgb(100, 100, 100);

    }

</style>