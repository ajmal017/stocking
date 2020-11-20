<template>
  <h1>
    You are a
  </h1>
  <h1 class="display-2">
    {{investor.name}}
  </h1>
  <h5>Description:</h5>
  <blockquote class="blockquote">
    {{investor.description}}
  </blockquote>
  <dl class="row">
    <dt class="col-sm-3">Trait:</dt>
    <dd class="col-sm-9">{{investor.trait}}</dd>

    <dt class="col-sm-3">Risk appetite:</dt>
    <dd class="col-sm-9">{{investor.risk}}
    </dd>

    <dt class="col-sm-3">Recommendation:</dt>
    <dd class="col-sm-9">
      <router-link
        class="text-decoration-none d-block"
        :to="{name:'Industry', params: {id:industry.id}}"
        v-for="(industry, index) in investor.recommendation"
        :key="index">
        {{industry.name}}
      </router-link>
    </dd>

  </dl>

</template>

<script>
import {investors} from "../assets/investors"

export default {
  data() {
    return {
      investor:investors[this.$route.params.id-1]
    }
  },
}
</script>

<style>

</style>