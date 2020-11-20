<template>
  <div>
    <h1>The Sorting Hat</h1>
    <p class="lead">The Sorting Hat shall determine what type of investor thou should be.</p>
  </div>
  <form @submit.prevent='submitSurvey'>
  <div class="mb-3">
    <label for="tradingExp" class="form-label">Trading Experience</label>
    <select class="form-select" id="tradingExp" >
      <option :value="options.value" v-for="(options, index) in tradingExpOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <select class="form-select" id="age">
      <option :value="options.value" v-for="(options, index) in ageOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="capital" class="form-label">Capital Available</label>
    <select class="form-select" id="capital">
      <option :value="options.value" v-for="(options, index) in capitalOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="purpose" class="form-label">Purpose for Investing</label>
    <select class="form-select" id="purpose">
      <option :value="options.value" v-for="(options, index) in purposeOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <div class="mb-3">
    <label for="iritated" class="form-label">If you are irritated by somebody, what would you do?</label>
    <select class="form-select" id="iritated">
      <option :value="options.value" v-for="(options, index) in irritatedOption" :key="index">
        {{ options.name }}
      </option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>

</template>

<script>

export default {
  data(){
    return{
      tradingExpOption: [
        {value:0, name: "Please Select"},
        {value:1, name: "< 1 Year"},
        {value:2, name: "1 - 5 Years"},
        {value:3, name: "> 5 Years"}
      ],
      ageOption: [
        {value:0, name: "Please Select"},
        {value:1, name: "18 - 30"},
        {value:2, name: "30 - 45"},
        {value:3, name: "> 45"}
      ],
      capitalOption: [
        {value:0, name: "Please Select"},
        {value:1, name: "< RM100,000"},
        {value:2, name: "RM100,000 - RM1,000,000"},
        {value:3, name: "> RM1,000,000"}
      ],
      purposeOption: [
        {value:0, name: "Please Select"},
        {value:1, name: "Retirement"},
        {value:2, name: "Wedding"},
        {value:3, name: "Buy Car, House etc"},
        {value:4, name: "Short Term Gain"}
      ],
      irritatedOption: [
        {value:0, name: "Please Select"},
        {value:1, name: "Fight Back"},
        {value:2, name: "Understand the reason they irritates me"},
        {value:3, name: "Walk away"}
      ],
    }
  },
  methods: {
    submitSurvey() {
      this.$router.push({name:'Result', params:{id:1}})
    }
  }


}
</script>

<style>

</style>