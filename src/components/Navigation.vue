<template>
  <div id="navigation">
    <nav>
      <v-link href="/">Home</v-link>
      <v-link href="/about">About</v-link>
    </nav>
  </div>
</template>


<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    },
    data() {
      return {
        msg: 'This is a message'
      }
    }
  }
</script>

<style scoped lang="scss">
  // Imports
  @import "../globalStyles/global";

  #navigation {
    background: black;
    color: white;
    padding: 24px;
  }
  a {
    margin: 0 24px;
    text-decoration: none;
    &:active, &:visited {
      color: orange;
    }
  }
</style>
