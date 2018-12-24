<template>
  <div id="overview" class="page">
    <header>
      <div class="title">
        <img src="/static/img/wcfp-brandmark.svg" alt="Wildcat Creek Fiber Project Brandmark" class="brandmark">
        <h1>Wildcat Creek Fiber Project</h1>
      </div>
      <div class="status">Status: Evaluating/Researching</div>
      <p>The residents of the Wildcat Creek Road Community have internet speeds and stability that fall well behind the rest of Manhattan just a few miles away. Their options are limited, either with legacy phone line technology or spotty satellite service, both of which still have slow speeds on the best of days. Service providers have vocally informed residents that service won't improve and no plans to deliver better service will be coming.</p>
      <p>This project aims to use newer technology to transmit faster internet service from areas that have fast fiber service, so that residents can participate in contemporary society, including speeds that allow for large file uploads/downloads, video services, and enable remote work. We believe that since service providers are desensitised to delivering better service, residents will need to organize and proactively pursue better options.</p>
      <a href="https://cotybeasley.typeform.com/to/oM0Dyu" target="_blank" class="cta btn">Sign up for updates</a>
    </header>
    <section id="proposal-area">
      <h2>Proposed Service Area in Evaluation</h2>
      <a href="https://api.mapbox.com/styles/v1/wcfp/cjq10iet01waa2rqjv4f6uuuu.html?fresh=true&title=true&access_token=pk.eyJ1Ijoid2NmcCIsImEiOiJjanExMGd1aDYwc2w3NDJyMXlhNGpwd3NsIn0.kzJ7I0HYbEkzhKAN4cmB-Q#14.1/39.181795/-96.669735/0" class="btn" target="_blank">
        <img src="/static/img/servicemap.jpg" alt="Proposed area for service">
      </a>
      <span class="font_small caption">Click map for details</span>
      <p>This coverage is the initial evaluation area based on customer density and topographical advantage. The technology being explored requires the best line-of-sight configuration possible, meaning that the use of towers, trees, and rooftops are required to achieve the height requirements to build a community network.</p>
    </section>
    <section>
      <h2>What other communities have done this?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur maiores quae repellat temporibus ut? Culpa delectus, deleniti expedita facilis, itaque magnam molestiae nobis obcaecati possimus, qui quod sed ut.</p>
    </section>
    <a href="https://cotybeasley.typeform.com/to/oM0Dyu" target="_blank" class="cta btn">Participate in this study</a>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      msg: 'This is the overview page.'
    }
  }
}
</script>

<style scoped lang="scss">
// Imports
@import "../../globalStyles/global";

header {
  border-bottom: 1px solid rgba(black, 0.2);
  padding-bottom: 1.6rem;
  margin-bottom: 3.2rem;
  .status {
    display: inline-block;
    padding: 0.8rem 1.6rem;
    color: white;
    background: map-get($colors-theme, accent);
    margin-top: 1.6rem;
    border-radius: 16px;
    font-size: 1.4rem;
  }
}

section {
  margin-bottom: 4.8rem;
}
.title {
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
  }
  & > * {
    display: inline-block;
  }
  .brandmark {
    max-width: 3.2rem;
    margin: 0 1rem 0 0;
    display: inline-block;
  }
}

a.cta {
  display: block;
  background: map-get($colors-theme, cta);
  color: darken(map-get($colors-theme, cta), 40%);
  padding: 1.6rem 2.4rem;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  line-height: 1;
  margin: 1.6rem 0;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>
