<template>
  <h1>{{metric.name}} ({{metric.abbrev}})</h1>
  <p v-for="(description, index) in descriptionArray" :key="index">{{description}}</p>
  <p>{{metric.formula}}</p>
</template>
<script>
import { metrics } from "../assets/metrics"
export default {
  data() {
    return {
      metric:metrics[this.$route.params.id-1],
    }
  },
  computed: {
    descriptionArray: function(){
      return this.metric.description.split('\n')
    }
  }
}

</script>

<style>

</style>