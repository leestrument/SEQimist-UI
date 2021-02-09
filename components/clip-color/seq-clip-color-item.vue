<template>
    
    <div class="seq-clip-color-item" :style="{background : color}"></div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : {},
    props : { color : { type : String, default : 'yellow'} }

})

</script>

<style scoped>

    .seq-clip-color-item {

        border-radius: 4px;

    }

</style>