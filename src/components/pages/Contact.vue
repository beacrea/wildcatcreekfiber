<template>
  <div id="contact" class="page">
    <section>
      <h2>Community Representative</h2>
      <small>This will be your primary contact for the project. This person coordinates all project efforts and communication.</small>
      <div class="user-card">
        <div class="thumbnail">
          <img src="/static/img/cbeasley.png" alt="Coty Beasley" class="">
        </div>
        <div class="info">
          <div class="name">Coty Beasley</div>
          <div class="title">Main Contact</div>
        </div>
        <div class="contact">
          <a href="mailto:contact@wildcatcreekfiber.com" class="cta">Email</a>
        </div>
      </div>
    </section>
    <section>
      <h2>Network Operator</h2>
      <div class="user-card">
        <div class="thumbnail placeholder">
          <img src="/static/img/user-light.svg" alt="Placeholder Contact">
        </div>
        <div class="info">
          <div class="name">Unassigned</div>
          <!--<div class="title">Main Contact</div>-->
        </div>
      </div>
    </section>
    <section>
      <h2>Service Provider</h2>
      <div class="user-card">
        <div class="thumbnail placeholder">
          <img src="/static/img/user-light.svg" alt="Placeholder Contact">
        </div>
        <div class="info">
          <div class="name">Unassigned</div>
          <!--<div class="title">Main Contact</div>-->
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

section {
  margin-bottom: 3.2rem;
  small {
    margin-bottom: 1.6rem;
    display: block;
  }
}

.user-card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.225);
  img {
    max-width: 100%;
    border: 0;
  }
  .name {
    font-size: 1.7rem;
  }
  .title {
    margin-top: 0.4rem;
    font-size: 1.4rem;
  }
  .contact {
    margin-right: 1.6rem;
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
