<template>
    
    <div class="lee-label-box">
        
        <div class="lee-label-box-label">

            <span class="lee-label-box-label-text" v-text="label"></span>

        </div>

        <div class="lee-label-box-content">

            <slot></slot>

        </div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({

    props : { label : { type : String, default : 'Label' } },
    components : {}

})

</script>

<style scoped>

    .lee-label-box {

        width : 100%;
        height : 100%;
        display: grid;
        grid-template-rows: 30px 1fr;

    }

    .lee-label-box-label {

        background: rgb(40, 40, 45);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-left: 10px;

    }

    .lee-label-box-label-text {

        color: rgb(100, 100, 100);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100px;

    }

    .lee-label-box-content {

        position: relative;
        background: rgb(25, 25, 30);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

    }

</style>