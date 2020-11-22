<template>
  <h4 class="fst-italic">
    You are a:
  </h4>
  <h1 class="display-2 text-info animate__animated animate__fadeIn animate__slow">
    {{investor.name}}
  </h1>
  <p class="lead">
    {{investor.description}}
  </p>
  <div class="card text-dark mt-5 animate__animated animate__fadeInUpBig animate__delay-1s">
    <div class="card-body">
      <dl class="row">
        <dt class="col-sm-3">Trait:</dt>
        <dd class="col-sm-9 fst-italic">{{investor.trait}}</dd>

        <dt class="col-sm-3">Risk appetite:</dt>
        <dd class="col-sm-9 fst-italic">{{investor.risk}}
        </dd>

        <dt class="col-sm-3">Target:</dt>
        <dd class="col-sm-9 fst-italic">{{investor.target}}
        </dd>

        <dt class="col-sm-3">Time Horizon:</dt>
        <dd class="col-sm-9 fst-italic">{{investor.timeHorizon}}
        </dd>

        <dt class="col-sm-3 mt-3">Recommended Investment:</dt>
        <div class="row mt-3">
          <div
            v-for="(industry, index) in investor.recommendation"
            :key="index"
            class="col-5">
            <router-link
              class="btn btn-sm btn-warning d-block animate__animated animate__pulse animate__infinite animate__delay-3s"
              :to="{name:'Industry', params: {id:industry.id}}"
              >
              {{industry.name}}
            </router-link>
          </div>
        </div>
      </dl>
    </div>
  </div>
  <div class="d-grid gap-2 py-3 animate__animated animate__fadeInUpBig">
    <router-link class="btn btn-outline-light" :to="{name:'Survey'}">
      Click Here to Do Another Survey
    </router-link>
  </div>
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