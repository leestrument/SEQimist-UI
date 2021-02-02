<template>
    
    <div class='seq-piano-roll-grid'>

        <div class="seq-piano-roll-grid-line" v-for='i in 16' :key="i"></div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    components : { }

})

</script>

<style scoped>

    .seq-piano-roll-grid {

        position: absolute;
        width : 100%;
        height : 100%;
        display: grid;
        grid-auto-flow: column;

    }

    .seq-piano-roll-grid-line {

        border-left: 2px solid rgb(60, 60, 60);

    }

</style>