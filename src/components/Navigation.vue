<template>
  <div id="navigation">
    <nav>
      <v-link href="/">Overview</v-link>
      <v-link href="/about">Stats</v-link>
      <v-link href="/">Service</v-link>
      <v-link href="/">Contact</v-link>
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
    nav {
      display: flex;
    }
  }
  a {
    margin: 1.6rem 2.4rem;
    flex: 1 auto;
    text-decoration: none;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1;
    color: white;
    &:active, &:visited {
      color: white;
    }
    &.active {
      color: orange;
    }
  }
</style>
