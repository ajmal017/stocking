<template>
  <div class="animate__animated animate__fadeIn animate__faster">
    <img src="../assets/img/buildings.png" class="mx-auto d-block mb-3">
    <h2 class="text-center mb-4">{{industry.name}} ({{industry.abbrev}})</h2>
    <p>{{industry.description}}</p>
  </div>
  <div class="card text-dark animate__animated animate__fadeInUpBig">
    <div class="card-body">
      <h6>Advantages:</h6>
        <ul>
          <li v-for="(advantages, index) in industry.advantages" :key="index">{{advantages}}</li>
        </ul>
      <h6>Disadvantages:</h6>
        <ul>
          <li v-for="(disadvantages, index) in industry.disadvantages" :key="index">{{disadvantages}}</li>
        </ul>
      <h6 class="mt-4">Suitable Valuation Metrics:</h6>
      <div class="row mt-3">
        <div v-for="(metrics, index) in industry.metrics" :key="index" class="col-5">
          <router-link
            class="btn btn-sm btn-warning d-block animate__animated animate__pulse animate__infinite animate__delay-2s"
            :to="{name:'Metric', params: {id:metrics.id}}">
            {{metrics.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="d-grid gap-2 py-3 animate__animated animate__fadeInUpBig">
    <router-link class="btn btn-success " :to="{name:'Stock'}">
      Click Here to View the Comparison of REIT
    </router-link>
    <router-link class="btn btn-danger open" :to="{name:'Broker'}">
      Open a Trading Account to Start Investing
    </router-link>
  </div>
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
img {
  max-height: 120px;
}

.open {
  background-color: orangered;
  color: white;
  border: orangered;
}
</style>