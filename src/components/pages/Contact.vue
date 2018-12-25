<template>
  <div id="contact" class="page">
    <section>
      <h3>Community Representative</h3>
      <div class="user-card btn">
        <div class="thumbnail">
          <img src="/static/img/cbeasley.png" alt="Coty Beasley" class="">
        </div>
        <div class="info">
          <div class="name">Coty Beasley</div>
          <div class="title">Main Contact</div>
        </div>
      </div>
    </section>
    <section>
      <h3>Network Operator</h3>
      <div class="user-card btn">
        <div class="thumbnail placeholder">
          <img src="/static/img/user-light.svg" alt="Placeholder Contact">
        </div>
        <div class="info">
          <div class="name">Coty Beasley</div>
          <div class="title">Main Contact</div>
        </div>
      </div>
    </section>
    <section>
      <h3>Service Provider</h3>
      <div class="user-card btn">
        <div class="thumbnail placeholder">
          <img src="/static/img/user-light.svg" alt="Placeholder Contact">
        </div>
        <div class="info">
          <div class="name">Coty Beasley</div>
          <div class="title">Main Contact</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
// Imports
@import "../../globalStyles/imports";
@import "../../globalStyles/vars";

.user-card {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    border: 0;
  }
  .thumbnail {
    height: 6.4rem;
    width: 6.4rem;
    min-height: 6.4rem;
    min-width: 6.4rem;
    border-radius: 100%;
    border: 1px solid rgba(black, 0.2);
    overflow: hidden;
    margin: 0.8rem 1.6rem;
    &.placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 50%;
      }
    }
  }
  .info {
    width: 100%;
  }
}
</style>
