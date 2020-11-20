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
<h5>Comparison of REIT</h5>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Company</th>
      <th scope="col">Shariah</th>
      <th scope="col">Price</th>
      <th scope="col">P/CF</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(stock, index) in stocks" :key="index">
      <th scope="row">{{stock.abbrev}}</th>
      <td>{{stock.shariah?'Yes':'No'}}</td>
      <td >{{(stock.price)}}</td>
      <td>{{stock.pcf}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {industries} from "../assets/industries"
import {stocks} from "../assets/stocks"
export default {
 data() {
    return {
      industry:industries[this.$route.params.id-1],
      stocks:stocks
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.changeData();
    },2000);
  },
  methods:{
    changeData(){
      let newStocks=stocks.map(stock => {
        var randomnum = Math.floor(Math.random() * (10- 1) + 1) / (1000);
        let oldPrice = stock.price
        stock.price = Math.round((Math.random() < 0.5 ? oldPrice+randomnum : oldPrice-=randomnum)*100)/100;
        stock.increase = oldPrice < stock.price
        return stock
      });
      this.stocks=newStocks
    }
  }

}
</script>

<style lang="scss" scoped>
</style>