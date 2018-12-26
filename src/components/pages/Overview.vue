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
      <p>The technology used to accomplish this is called a point-to-point fixed wireless network. The equipment required to build this type of network has recently become far less expensive, enabling communities to organize and construct the infrastructure that traditional service providers aren't identified to build.</p>
      <p>Here are a couple good resources to understand things better:</p>
      <a href="https://arstechnica.com/information-technology/2015/11/how-a-group-of-neighbors-created-their-own-internet-service/" target="_blank" class="article btn">
        <div class="thumbnail">
          <img src="/static/img/newspaper-light.svg" alt="Newspaper article">
        </div>
        <div class="title">How a group of neighbors created their own Internet service</div>
      </a>
      <a href="https://www.dailymail.co.uk/sciencetech/article-3459003/Now-S-wifi-booster-150-antenna-lets-share-network-25km-need-built-mast-it.html" target="_blank" class="article btn">
        <div class="thumbnail">
          <img src="/static/img/newspaper-light.svg" alt="Newspaper article">
        </div>
        <div class="title">$150 antenna lets you share data over 25km</div>
      </a>
      <a href="https://www.fluidmesh.com/point-to-point-wireless" target="_blank" class="article btn">
        <div class="thumbnail">
          <img src="/static/img/newspaper-light.svg" alt="Newspaper article">
        </div>
        <div class="title">What is point-to-point wireless internet?</div>
      </a>
      <a href="http://www.wispa.org/About-Us/Mission-and-Goals" target="_blank" class="article btn">
        <div class="thumbnail">
          <img src="/static/img/newspaper-light.svg" alt="Newspaper article">
        </div>
        <div class="title">Wireless Internet Service Provider Association</div>
      </a>
    </section>
    <section>
      <h2>We need your help</h2>
      <p>This project is still in a research phase as we assess market demand as well as network build-out strategies. If you'd like to help out, please fill out this survey and you'll be added to our update list as the project progresses. Thanks!</p>
      <a href="https://cotybeasley.typeform.com/to/oM0Dyu" target="_blank" class="cta btn">Participate in this study</a>
    </section>
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
  img {
    border: none;
  }
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

.article {
  display: flex;
  background: white;
  margin-bottom: 1.6rem;
  color: white;
  background: map-get($colors-theme, accent);
  border-radius: 4px;
  font-style: italic;
  .title {
    padding: 1.6rem;
  }
  .thumbnail {
    background: rgba(white, 0.5);
    min-width: 6.4rem;
    max-width: 6.4rem;
    width: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 60%;
      border: 0;
    }
  }
}
</style>
