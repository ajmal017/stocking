<template>
  <h1>{{industry.name}} ({{industry.abbrev}})</h1>
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
  <ul>
    <li v-for="(metrics, index) in industry.metrics" :key="index">
      <router-link
        class="text-decoration-none"
        :to="{name:'Metric', params: {id:metrics.id}}">
        {{metrics.name}}
      </router-link>
    </li>
  </ul>
  <router-link class="text-decoration-none" :to="{name:'Stock'}">
    Click Here to View the Comparison of REIT
  </router-link>
</template>

<script>
import {industries} from "../assets/industries"
export default {
 data() {
    return {
      industry:industries[this.$route.params.id-1],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>