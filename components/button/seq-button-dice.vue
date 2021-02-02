<template>
    
    <div>

        <seq-svg-dice :color="'red'"/>

    </div>

</template>

<script lang="ts">

import { defineComponent }  from 'vue'
import SeqSvgDice           from '../svg/seq-svg-dice.vue'

export default defineComponent({

    components : { SeqSvgDice }

})

</script>