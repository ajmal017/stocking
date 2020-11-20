<template>
<h5>Comparison of REIT</h5>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Broker</th>
      <th scope="col">Online Brokerage Fees</th>
      <th scope="col">Trading Limit</th>
      <th scope="col">Special Offers/Feature</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(broker, index) in brokers" :key="index">
      <th scope="row">{{broker.name}}</th>
      <td>
        <ul>
          <li v-for="(onlineBrokerFees, index) in broker.onlineBrokerFees" :key="index">
            {{onlineBrokerFees}}
          </li>
        </ul>
      </td>
      <td>
        <li v-for="(tradingLimit, index) in broker.tradingLimit" :key="index">
          {{tradingLimit}}
        </li>
      </td>
      <td>
        <li v-for="(specialOffers, index) in broker.specialOffers" :key="index">
          {{specialOffers}}
        </li>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { brokers } from "../assets/broker"
export default {
  data(){
    return{
      brokers:brokers
    }
  }
}
</script>

<style>

</style>