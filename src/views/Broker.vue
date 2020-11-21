<template>
<h1>Brokers</h1>
<div class="row row-cols-auto g-3">
  <div class="col" v-for="(broker, index) in brokers" :key="index" >
    <div class="card" style="max-width: 20rem;" >
      <a :href="broker.link" target="_blank">
        <img :src="getImgUrl(broker.img.src)" class="card-img-top p-3" v-bind:alt="broker.img.alt">
      </a>
      <div class="card-body">
        <h5 class="card-title">{{broker.name}}</h5>
        <p class="card-text"><a :href="broker.link" target="_blank" role="button">Go to Site</a>
      </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Online Broker Fees
          <ul>
              <li v-for="(onlineBrokerFees, index) in broker.onlineBrokerFees" :key="index">
                {{onlineBrokerFees}}
              </li>
            </ul>
        </li>
        <li class="list-group-item">Trading Limit
          <ul>
            <li v-for="(tradingLimit, index) in broker.tradingLimit" :key="index">
              {{tradingLimit}}
            </li>
          </ul>
        </li>
        <li class="list-group-item" v-if="broker.specialOffers.length">Special Offers
          <ul>
            <li v-for="(specialOffers, index) in broker.specialOffers" :key="index">
              {{specialOffers}}
            </li>
          </ul>
        </li>
        <li class="list-group-item" v-if="broker.googlePlay||broker.appStore">
          <a :href="broker.googlePlay" v-if="broker.googlePlay" target="_blank">
            <img src="../assets/google-play-badge.png" class="google-play"/>
          </a>
          <a :href="broker.appStore" v-if="broker.appStore" target="_blank">
            <img src="../assets/app-store-badge.svg" class="apple-store"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>


</template>

<script>
import { brokers } from "../assets/broker"
export default {
  data(){
    return{
      brokers:brokers
    }
  },
  methods:{
    getImgUrl(pic) {
      return require('../assets/brokers/'+pic)
    }
  }
}
</script>

<style>
.google-play{
  width: 9.6rem;
  height: auto;
}
.apple-store{
  width: 8rem;
  height: auto;
}
</style>