<template>
    
    <div class="seq-track-solo">

        <span>S</span>

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

    .seq-track-solo {

        background: rgb(30, 30, 35);
        margin: 5px 5px 5px 2.5px;
        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;

    }
    
    .seq-track-solo > span {

        color: rgb(60, 60, 65);

    }

</style>