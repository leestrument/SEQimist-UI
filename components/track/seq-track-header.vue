<template>
    
    <div class="seq-track-header">

        <span>C1</span>

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

    .seq-track-header {

        background: palevioletred;
        margin: 5px 0px 5px 5px;
        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .seq-track-header > span {

        font-weight: bolder;
        color: rgb(40, 40, 45);

    }

</style>