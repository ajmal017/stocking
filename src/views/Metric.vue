<template>
  <div class="animate__animated animate__zoomIn" v-bind:class="{'animate__zoomOut': back}">
    <img src="../assets/img/lightbulb.png" alt="lightbulb" class="mx-auto d-block mb-3">
    <h2 class="text-center mb-4">{{metric.name}} <small v-if="metric.abbrev">({{metric.abbrev}})</small></h2>
    <p v-for="(description, index) in descriptionArray" :key="index">{{description}}</p>
    <p>{{metric.formula}}</p>
    <h5 class="text-center text-success mt-5"><strong>{{metric.evaluation}} is Better</strong></h5>
  </div>
  <button class="bottom text-white animate__animated animate__zoomIn" @click="goBack">Back</button>
</template>
<script>
import { metrics } from "../assets/metrics"
export default {
  data() {
    return {
      back: false,
      metric:metrics[this.$route.params.id-1],
    }
  },
  computed: {
    descriptionArray: function(){
      return this.metric.description.split('\n')
    }
  },
  methods: {
    goBack() {
      this.back = true;
      setTimeout(() => {
        this.$router.go(-1);
        this.back = false;
        }, 800);
      
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
}

.bottom {
  position: absolute;
  bottom: 10px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  padding: 10px;
  font-size: 1.1rem;
}
</style>