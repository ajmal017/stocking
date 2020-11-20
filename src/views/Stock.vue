<template>
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
import {stocks} from "../assets/stocks"
export default {
  data(){
    return{
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
        let randomnum = Math.floor(Math.random() * (10- 1) + 1) / (1000);
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

<style>

</style>