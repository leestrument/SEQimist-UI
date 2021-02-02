<template>
    
    <div class='seq-global'>

        <seq-button-logo      class='seq-button-logo'/>
        <seq-button-add       class='seq-button-add'/>
        <seq-button-remove    class='seq-button-remove'/>
        <seq-button-dice      class='seq-button-dice'/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqButtonLogo        from '../button/seq-button-logo.vue'
import SeqButtonAdd         from '../button/seq-button-add.vue'
import SeqButtonRemove      from '../button/seq-button-remove.vue'
import SeqButtonDice        from '../button/seq-button-dice.vue'

export default defineComponent({

    components : { SeqButtonLogo, SeqButtonAdd, SeqButtonRemove, SeqButtonDice }

})

</script>

<style scoped>

    .seq-global {

        position: relative;

    }

    .seq-button-logo {

        position: absolute;
        left: 10px;
        width : 150px;
        height : 100%;

    }

    .seq-button-add {

        position: absolute;
        top : 10px;
        right: 90px;
        width : 30px;
        height : 30px;

    }

    .seq-button-remove {

        position: absolute;
        top : 10px;
        right: 50px;
        width : 30px;
        height : 30px;

    }

    .seq-button-dice {

        position: absolute;
        top : 10px;
        right: 10px;
        width : 30px;
        height : 30px;

    }
    
</style>