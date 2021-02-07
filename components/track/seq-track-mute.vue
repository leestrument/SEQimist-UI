<template>
    
    <div class="seq-track-mute">

        <span v-text="index"></span>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { index : { type : Number, required : true } },
    components : {}

})

</script>

<style scoped>

    .seq-track-mute {

        background: goldenrod;
        display: flex;
        justify-content: center;
        align-items: center;

    }

</style>