<template>
  <div id="app">
    <div id="contentBody">
      <Nav></Nav>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Navigation.vue'

  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  // Imports
  @import "../globalStyles/global";

  #app, main {
    display: flex;
    height: 100%;
  }

  main {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  #contentBody {
    background: white;
    height: 100%;
    max-width: 100%;
    width: 100%;
    transition: all 0.3s ease-out;
    display: flex;
    flex-flow: column;
  }

  @media screen and (min-width: 70rem) {
    #contentBody {
      width: 40%;
      max-width: 768px;
    }
  }

  main {
    padding: $padding_side;
    background: #f9f7f5;
  }
</style>
