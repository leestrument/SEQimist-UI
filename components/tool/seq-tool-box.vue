<template>
    
    <div class="seq-tool-box">

        <seq-svg-button

            v-for       ="(tool, index) in tools"
            :key        ="index"
            :view-box   ="tool.viewBox"
            :path       ="tool.path"
        
        />

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqSvgButton         from '../button/seq-svg-button.vue'
import tools                from './seq-tools'

export default defineComponent({ 
    
    
    components : { SeqSvgButton },
    setup() {

        return { tools }

    } 

})

</script>

<style scoped>

    .seq-tool-box {

        width : 100%;
        height : 100%;
        display: grid;
        grid-template-rows: repeat(15, 1fr);

    }

</style>