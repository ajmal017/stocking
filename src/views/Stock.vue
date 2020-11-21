<template>
<div class="animate__animated animate__fadeInUpBig" v-bind:class="{'animate__fadeOutDownBig': back}">
<div class="row">
  <h4 class="col-10 text-center">Comparison of REIT</h4>
  <button class="col-2 text-white back" @click="goBack">Back</button>
</div>
<table class="table table-responsive-sm text-white mt-3">
  <thead>
    <tr>
      <th scope="col">Company</th>
      <th scope="col">Shariah</th>
      <th scope="col">Price</th>
      <th scope="col">P/CF</th>
      <th scope="col">Debt Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(stock, index) in stocks" :key="index">
      <th scope="row">{{stock.abbrev}}</th>
      <td class="fw-bold text-center" v-bind:class="{'text-success': stock.shariah, 'text-danger': !stock.shariah}">{{stock.shariah ? 'Yes' : 'No'}}</td>
      <td class="fw-bold text-center" v-bind:class="{'text-success': stock.increase, 'text-danger': !stock.increase}">{{(stock.price)}}</td>
      <td>{{stock.pcf}}</td>
      <td>{{stock.debtRatio}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import {stocks} from "../assets/stocks"
export default {
  data(){
    return{
      back: false,
      stocks: stocks,
    }
  },
  mounted: function () {
    this.calculatePCF()
    this.calculateDebtRatio()
    window.setInterval(() => {
      this.changeData();
    },2000);
  },
  methods:{
    goBack() {
      this.back = true;
      setTimeout(() => {
        this.$router.go(-1);
        this.back = false;
        }, 500);
      
    },
    changeData(){
      let newStocks=stocks.map(stock => {
        let randomnum = Math.floor(Math.random() * (10- 1) + 1) / (1000);
        let oldPrice = stock.price
        stock.price = Math.round((Math.random() < 0.5 ? oldPrice+randomnum : oldPrice-=randomnum)*100)/100;
        stock.increase = oldPrice < stock.price
        return stock
      });
      this.stocks = newStocks
      this.calculatePCF()
    },
    calculatePCF(){
      let newStocks=stocks.map(stock => {
        stock.pcf =  Math.round((stock.price/(stock.cashflow/stock.share))*100)/100;
        return stock
      });
      this.stocks = newStocks
    },
    calculateDebtRatio(){
      let newStocks=stocks.map(stock => {
        stock.debtRatio =  Math.round((stock.bankBorrowings/stock.totalAsset)*100)/100;
        return stock
      });
      this.stocks = newStocks
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
}
</style>