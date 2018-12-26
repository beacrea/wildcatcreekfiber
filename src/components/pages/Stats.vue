<template>
  <div id="stats" class="page">
    <section>
      <CommitChart class="chart"></CommitChart>
      <small>*Sources include <a href="https://broadbandmap.fcc.gov/#/location-summary?version=jun2017&lat=39.185093&lon=-96.659275&tech=acfosw&speed=25_3&vlat=39.18123361961079&vlon=-96.6600995244736&vzoom=13.448719958031157" target="_blank">the FCC</a>,
        <a href="https://broadbandnow.com/Kansas" target="_blank">Broadbandnow.com</a>, and multi-year individual <a href="http://www.speedtest.net" target="_blank">Speedtest.net</a> reports.</small>
    </section>
    <section>
      <h2>FCC Reporting</h2>
      <p><a href="https://broadbandmap.fcc.gov/#/location-summary?version=jun2017&lat=39.185093&lon=-96.659275&tech=acfosw&speed=25_3&vlat=39.18123361961079&vlon=-96.6600995244736&vzoom=13.448719958031157" target="_blank">ATT and dishNet</a> have reported to the FCC that this area is capable of 25mps, but residents have reported that this service has not been available to them. After countless hours contacting service providers, the highest available speeds are around 6 mbps (instead of 25) and speed reports show that resisdents often get about 50-60% of these speeds anyway, putting an average around 3.5 mbps.</p>
      <FCCComp></FCCComp>
    </section>
    <section>
      <h2>Conclusion</h2>
      <p>Traditional service providers are currently not providing the service they're promising residents and available service speeds being reported at a federal level are much lower in actuality. These realities have both decentralized service providers from expanding their service and federal enforcement from identifying there's an issue.</p>
      <p>As such, residents will need to be proactive in order to create a better outcome for themselves. This project's goal is to statically highlight these issues in order to build a body of research that identifies an attractive market for an alternative network operator and service provider using emerging technologies to deliver faster and more stable service.</p>
    </section>
  </div>
</template>

<script>
import CommitChart from '../SpeedBarChart'
import FCCComp from '../FCCComp'

export default {
  components: {CommitChart, FCCComp}
}
</script>

<style lang="scss">
// Imports

@import "../../globalStyles/imports";
@import "../../globalStyles/vars";

#stats {
  .chart {
    padding-bottom: 2.4rem;
  }
}
</style>
