<template>
  
  <seq/>

</template>

<script lang="ts">

import { defineComponent } from "vue"
import Seq from './components/seq.vue'

export default defineComponent({ components : { Seq } })

</script>

<style>

  body {

    margin: 0;
    overflow: hidden; /* prevent body scroll (zittering background) */

  }

  #app {

    width : 100vw;
    height : 100vh;

  }

  span { user-select: none; }

</style>