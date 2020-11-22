<template>
  <div class="row">
    <h4 class="col-10 text-center">Brokers</h4>

    <button class="col-2 text-white back" @click="goBack">Back</button>
  </div>
  <div class="row row-cols-auto g-3 text-dark mt-3">
    <div
      class="col-sm-12 col-md-6"
      style="width: 100%"
      v-for="(broker, index) in brokers"
      :key="index"
    >
      <div class="card">
        <a :href="broker.link" target="_blank">
          <img
            :src="getImgUrl(broker.img.src)"
            class="p-3"
            v-bind:alt="broker.img.alt"
          />
        </a>
        <div class="card-body">
          <h5 class="card-title">{{ broker.name }}</h5>
          <p class="card-text">
            <a :href="broker.link" target="_blank" role="button"
              >Open trading account</a
            >
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="fw-bold">Online Broker Fees</span>
            <ul>
              <li
                v-for="(onlineBrokerFees, index) in broker.onlineBrokerFees"
                :key="index"
              >
                {{ onlineBrokerFees }}
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <span class="fw-bold">Trading Limit</span>
            <ul>
              <li
                v-for="(tradingLimit, index) in broker.tradingLimit"
                :key="index"
              >
                {{ tradingLimit }}
              </li>
            </ul>
          </li>
          <li class="list-group-item" v-if="broker.specialOffers.length">
            <span class="fw-bold">Special Offers</span>
            <ul>
              <li
                v-for="(specialOffers, index) in broker.specialOffers"
                :key="index"
              >
                {{ specialOffers }}
              </li>
            </ul>
          </li>
          <li
            class="list-group-item"
            v-if="broker.googlePlay || broker.appStore"
          >
            <a
              :href="broker.googlePlay"
              v-if="broker.googlePlay"
              target="_blank"
            >
              <img src="../assets/google-play-badge.png" class="google-play" />
            </a>
            <a :href="broker.appStore" v-if="broker.appStore" target="_blank">
              <img src="../assets/app-store-badge.svg" class="apple-store" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { brokers } from "../assets/broker";
export default {
  data() {
    return {
      brokers: brokers,
    };
  },
  methods: {
    goBack() {
      this.back = true;
      setTimeout(() => {
        this.$router.go(-1);
        this.back = false;
      }, 500);
    },
    getImgUrl(pic) {
      return require("../assets/brokers/" + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
}

img {
  max-height: 100px;
}
.google-play {
  width: 9.6rem;
  height: auto;
}
.apple-store {
  width: 8rem;
  height: auto;
}
</style>