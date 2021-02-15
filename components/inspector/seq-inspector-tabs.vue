<template>
    
    <div class="seq-inspector-tabs">

        <div class="seq-inspector-tab child-is-center"><span :class="selectedTabIndex === 0 ? 'on' : 'off'">Clip</span></div>
        <div class="seq-inspector-tab child-is-center"><span :class="selectedTabIndex === 1 ? 'on' : 'off'">Track</span></div>
        <div class="seq-inspector-tab child-is-center"><span :class="selectedTabIndex === 2 ? 'on' : 'off'">Note</span></div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { selectedTabIndex : { type : Number, default : 0 } },
    setup() {



    }

})

</script>

<style scoped>

    .seq-inspector-tabs {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2px;

    }

    .seq-inspector-tab { background: black; }

    span.on  { color : white }
    span.off { color : rgb(80, 80, 80)}

</style>