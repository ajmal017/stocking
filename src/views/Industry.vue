<template>
<h1>{{industry.name}}</h1>
{{industry.description}}
<h5>Advantages:</h5>
  <ul>
    <li v-for="(advantages, index) in industry.advantages" :key="index">{{advantages}}</li>
  </ul>
<h5>Disadvantages:</h5>
  <ul>
    <li v-for="(disadvantages, index) in industry.disadvantages" :key="index">{{disadvantages}}</li>
  </ul>
<h5>Suitable Valuation Metrics:</h5>
  <a
    class="text-decoration-none d-block"
    v-for="(metrics, index) in industry.metrics"
    :key="index">
    {{metrics.name}}
  </a>

</template>

<script>
import {industries} from "../assets/industries"
export default {
 data() {
    return {
      industry:industries[this.$route.params.id-1]
    }
  }
}
</script>

<style>

</style>